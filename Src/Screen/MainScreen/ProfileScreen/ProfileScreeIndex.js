import {StyleSheet,Text,View,Image,ScrollView,PermissionsAndroid,TouchableOpacity,Modal,Pressable,Alert,} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {Images} from '../../../Assets/Images/Images';
import Categories from '../../../Components/Categories';
import {String} from '../../../Style/Strings';
import {fontSizes, moderateScale} from '../../../constants/appConstant';
import COLOURS from '../../../Style/Colours';
import {AuthContext} from '../../../Navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import PrivacyAndPolicyIndex from './PrivacyAndPolicy/PrivacyAndPolicyIndex';
export default function ProfileScreenIndex({navigation, route}) {
  const {user, logout} = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    const currentUser = await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.Container}>
      <Text style={styles.CoffeeBeen}>{String.CoffeeBeen}</Text>
      <View style={styles.ProfileLogo}>
        <View>
          <View>
            {userData ? (
              <Image source={{uri: userData.userImg}} style={styles.Picture} />
            ) : (
              <Image source={Images.man} style={styles.Picture} />
            )}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfileAccount')}
            style={styles.Camera}>
            <Image source={Images.edit} style={styles.CameraPic} />
          </TouchableOpacity>
        </View>

        <Text style={styles.Name}>
          {userData ? userData.fname : ''} {userData ? userData.lname : ''}
        </Text>
        <Text style={styles.Work}>{String.Work}</Text>
      </View>

      <ScrollView>
        <View style={styles.Categories}>
          <Categories
            image={Images.Account}
            head={String.Account}
            subhead={String.AccountSub}
            onPress={() => navigation.navigate('ProfileAccountIndex')}
          />
        </View>

        <View style={styles.Categories}>
          <Categories
            image={Images.ringing}
            head={String.Notification}
            subhead={String.NotificationSub}
          />
        </View>

        <View style={styles.Categories}>
          <Categories
            image={Images.payment}
            head={String.Payment}
            subhead={String.PaymentSub}
            onPress={() => navigation.navigate('PaymentIndex')}
          />
        </View>

        <View style={styles.Categories}>
          <Categories
            image={Images.bookmark}
            head={String.Bookmark}
            subhead={String.BookmarkSub}
          />
        </View>

        <View style={styles.Categories1}>
          <Categories
            image={Images.privacypolicy}
            head={String.privacypolicy}
            subhead={String.privacypolicySub}
            onPress={() => navigation.navigate('PrivacyAndPolicyIndex')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  CoffeeBeen: {
    fontSize: fontSizes.FONT18,
    color: COLOURS.Secondary,
    fontFamily: 'Merienda-Bold',
    paddingHorizontal: moderateScale(20),
    marginTop: '8%',
  },
  ProfileLogo: {
    justifyContent: 'center',
    marginTop: '12%',
  },
  PictureTouch: {
    height: moderateScale(100),
    width: moderateScale(100),
    alignSelf: 'center',
  },
  Picture: {
    alignSelf: 'center',
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: 80,
    borderWidth: 0.5,
  },
  Camera: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: moderateScale(70),
  },
  CameraPic: {
    height: moderateScale(30),
    width: moderateScale(30),
    resizeMode: 'cover',
  },
  Name: {
    alignSelf: 'center',
    marginTop: '5%',
    fontSize: fontSizes.FONT17,
    color: COLOURS.Black,
  },
  Work: {
    alignSelf: 'center',
    marginTop: '1%',
    fontSize: fontSizes.FONT13,
    color: COLOURS.LightGray,
    opacity: 0.5,
  },
  Categories: {
    paddingHorizontal: moderateScale(25),
    marginTop: '5%',
  },
  Categories1: {
    paddingHorizontal: moderateScale(25),
    marginTop: '5%',
    paddingBottom: '30%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  MainTouch: {
    height: '100%',
    width: '100%',
    backgroundColor: COLOURS.Primary,
    justifyContent: 'center',
  },
  View: {
    height: moderateScale(150),
    width: moderateScale(220),
    backgroundColor: COLOURS.LightGreen,
    alignSelf: 'center',
    padding: moderateScale(5),
    borderRadius: 15,
  },
  Modals: {
    backgroundColor: COLOURS.Primary,
    height: moderateScale(40),
    marginTop: '5%',
    alignItems: 'center',
    borderRadius: 15,
    padding: moderateScale(10),
  },
  close: {
    height: moderateScale(25),
    width: moderateScale(25),
    alignSelf: 'flex-end',
    marginTop: '1%',
  },
  textStyle: {
    color: COLOURS.LightGray,
  },
});
