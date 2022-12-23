import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import firestore from '@react-native-firebase/firestore';
import {View,Alert} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(email, password);
            setLoading(false);
          } catch (e) {
            setLoading(false)
            switch (e.code) {
              case "auth/user-not-found":
                alert(' There is no user record found.Please check your email ')
                break;
              case "auth/wrong-password":
                alert(' It seems you have entered wrong password')
                break;
            }
          }
        },
        googleLogin: async () => {
          try {
            setLoading(true);
            const {idToken} = await GoogleSignin.signIn();
            setLoading(false);
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);
            await auth()
              .signInWithCredential(googleCredential)
              .catch(error => {
                setLoading(false);
                console.log('Something went wrong with sign up: ', error);
              });
          } catch (error) {
            setLoading(false);
            console.log({error});
          }
        },
        fbLogin: async () => {
          try {
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]);

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );
            await auth().signInWithCredential(facebookCredential);
          } catch (error) {
            console.log({error});
          }
        },
        register: async (
          email,
          password,
          firstname,
          lastname,
          about,
          mobilenumber,
          country,
          city,
          userImg,
          address,
        ) => {
          try {
            setLoading(true);
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                firestore()
                  .collection('users')
                  .doc(auth().currentUser.uid)
                  .set({
                    fname: firstname,
                    lname: lastname,
                    email: email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    city: city,
                    mobilenumber: mobilenumber,
                    country: country,
                    about: about,
                    userImg: userImg,
                    address: address,
                  });
                setLoading(false).catch(error => {
                  console.log(
                    'Something went wrong with added user to firestore: ',
                    error,
                  );
                });
              });
          } catch (e) {
            setLoading(false);
            console.log(e);
          }
        },
        logout: async () => {
          try {
            setLoading(true);
            await auth().signOut();
            setLoading(false);
          } catch (e) {
            setLoading(false);
            console.log(e);
          }
        },
        mobileLogin: async (phoneNumber, OTP) => {
          try {
            // setLoading(true);
            const confirmation = await auth().signInWithPhoneNumber(
              phoneNumber,
            );
            // setLoading(false);
          } catch (e) {
            console.log(e);
          }
        },
        verifyOTP: async OTP => {
          try {
            setLoading(true);
            const otp = await confirm.confirm(OTP);
            setLoading(false);
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
      <>
        <Spinner visible={loading} color={'lightgreen'} />
      </>
    </AuthContext.Provider>
  );
};
