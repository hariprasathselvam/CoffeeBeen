import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Button,
  Alert,
  Modal,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Images} from '../../../Assets/Images/Images';
import {fontSizes, moderateScale} from '../../../constants/appConstant';
import {String} from '../../../Style/Strings';
import COLOURS from '../../../Style/Colours';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../../Navigation/AuthProvider';
import {ScrollView} from 'react-native-gesture-handler';
import TextBox from '../../../Components/TextBox';
import Categories from '../../../Components/Categories';
import Buttons from '../../../Components/Buttons';
import Spinner from 'react-native-loading-spinner-overlay';
export default function EditProfileAccount({navigation}) {
  const {user, logout} = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [userData, setUserData] = useState(null);

  const [Loading, setLoading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [edits, setEdits] = useState(true);

  const Show = () => {
    setEdits(false);
  };

  const UpdateBack = () => {
    handleUpdate();
    setEdits(true);
  };
  const Goback = () => {
    setEdits(true);
  };
  const model = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    getUser();
  }, []);

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      try {
        const imageUri = result.assets[0].uri;
        setImage(imageUri);
        setModalVisible(false);
      } catch {
        alert('You Have Not Take A Photo');
      }
    }
  };

  const openGalary = async () => {
    const result = await launchImageLibrary(options);
    try {
      const imageUri = result.assets[0].uri;
      setImage(imageUri);
      setModalVisible(false);
    } catch {
      alert('You Have Not Take A Photo');
    }
  };

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

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      Alert.alert(
        'Image uploaded!',
        'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      );
      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const handleUpdate = async () => {
    let imgUrl = await uploadImage();
    console.log(imgUrl);

    if (imgUrl == null && userData.userImg) {
      imgUrl = userData.userImg;
    }

    firestore()
      .collection('users')
      .doc(user.uid)
      .update({
        fname: userData.fname,
        lname: userData.lname,
        city: userData.city,
        mobilenumber: userData.mobilenumber,
        country: userData.country,
        city: userData.city,
        userImg: imgUrl,
        address: userData.address,
        about: userData.about,
      })
      .then(() => {
        console.log('User Updated!');
        Alert.alert(
          'Profile Updated!',
          'Your profile has been updated successfully.',
        );
      });
  };

  return (
    <View style={styles.Container}>
      {edits ? (
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.LeftArrow} source={Images.Back} />
          </TouchableOpacity>
          <View style={styles.Body}>
            <View>
              {userData ? (
                <Image
                  source={{uri: userData.userImg}}
                  style={styles.Picture}
                />
              ) : (
                <Image source={Images.man} style={styles.Picture} />
              )}
            </View>

            <TouchableOpacity onPress={Show} style={styles.Camera}>
              <Image source={Images.edit} style={styles.CameraPic} />
            </TouchableOpacity>
          </View>

          <Text style={styles.Name}>
            {userData ? userData.fname : ''} {userData ? userData.lname : ''}
          </Text>

          <View style={styles.Categories}>
            <Categories
              image={Images.mail}
              head={String.email}
              subhead={userData ? userData.email : ''}
            />
          </View>

          <View style={styles.Categories1}>
            <Categories
              image={Images.phone}
              head={'Mobile Number'}
              subhead={userData ? userData.mobilenumber : 'mobilenumber'}
            />
          </View>

          <View style={styles.Categories1}>
            <Categories
              image={Images.country}
              head={'Country'}
              subhead={userData ? userData.country : 'country'}
            />
          </View>

          <View style={styles.Categories1}>
            <Categories
              image={Images.city}
              head={'City'}
              subhead={userData ? userData.city : 'city'}
            />
          </View>

          <View style={styles.Categories1}>
            <Categories
              image={Images.address}
              head={'Address'}
              subhead={userData ? userData.address : 'address'}
            />
          </View>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={Goback}>
            <Image style={styles.LeftArrow} source={Images.Back} />
          </TouchableOpacity>
          <View style={styles.Body}>
            <Image
              style={styles.Picture}
              source={{
                uri: image
                  ? image
                  : userData
                  ? userData.userImg || 
                    'https://cdn-icons-png.flaticon.com/512/2202/2202112.png'
                  : 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png',
              }}
            />
            <TouchableOpacity onPress={model} style={styles.Camera}>
              <Image source={Images.camera} style={styles.CameraPic} />
            </TouchableOpacity>
          </View>
          <ScrollView style={{}}>
            <Spinner visible={Loading} color={'lightgreen'} />
            <View style={{marginTop: 20, paddingHorizontal: 20}}>
              <TextBox
                value={userData ? userData.email : ''}
                onChangeText={txt => setUserData({...userData, email: txt})}
                TextName={'Email'}
                PlaceHolder={'FirstName'}
              />
            </View>

            <View style={{marginTop: 20, paddingHorizontal: 20}}>
              <TextBox
                value={userData ? userData.mobilenumber : ''}
                onChangeText={txt =>
                  setUserData({...userData, mobilenumber: txt})
                }
                TextName={'Mobile Number'}
                PlaceHolder={'FirstName'}
              />
            </View>

            <View style={{marginTop: 20, paddingHorizontal: 20}}>
              <TextBox
                value={userData ? userData.country : ''}
                onChangeText={txt => setUserData({...userData, country: txt})}
                TextName={'Country'}
                PlaceHolder={'FirstName'}
              />
            </View>

            <View style={{marginTop: 20, paddingHorizontal: 20}}>
              <TextBox
                value={userData ? userData.city : ''}
                onChangeText={txt => setUserData({...userData, city: txt})}
                TextName={'City'}
                PlaceHolder={'FirstName'}
              />
            </View>

            <View style={{marginTop: 20, paddingHorizontal: 20}}>
              <TextBox
                value={userData ? userData.address : ''}
                onChangeText={txt => setUserData({...userData, address: txt})}
                TextName={'Address'}
                PlaceHolder={'FirstName'}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                paddingHorizontal: 20,
                padding: 10,
                paddingBottom: 20,
              }}>
              <Buttons text={'UPDATE'} onpress={UpdateBack} />
            </View>
          </ScrollView>

          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}>
            <View style={styles.centeredView}>
              <TouchableOpacity
                style={styles.MainTouch}
                onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.View}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.buttonClose}>
                    <Image source={Images.close} style={styles.close} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.Modals} onPress={openCamera}>
                    <Text style={styles.textStyle}>{String.OpenCamera}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.Modals} onPress={openGalary}>
                    <Text style={styles.textStyle}>{String.OpenGalary}</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  LeftArrow: {
    height: moderateScale(22),
    width: moderateScale(22),
    margin: moderateScale(17),
  },
  Body: {
    bottom: moderateScale(20),
  },
  Name: {
    fontSize: fontSizes.FONT18,
    color: COLOURS.Secondary,
    fontFamily: 'Merienda-Bold',
    alignSelf: 'center',
  },
  Picture: {
    alignSelf: 'center',
    height: moderateScale(150),
    width: moderateScale(150),
    borderRadius: 80,
    borderWidth: 0.5,
  },
  Camera: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: moderateScale(115),
  },
  CameraPic: {
    height: moderateScale(35),
    width: moderateScale(35),
    resizeMode: 'cover',
  },
  Categories: {
    paddingHorizontal: moderateScale(25),
    marginTop: '10%',
  },
  Categories1: {
    paddingHorizontal: moderateScale(25),
    marginTop: '5%',
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
