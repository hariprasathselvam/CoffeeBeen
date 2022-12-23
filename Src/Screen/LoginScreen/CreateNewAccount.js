import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import TextBox from '../../Components/TextBox';
import PasswordTextBox from '../../Components/PasswordTextBox';
import {String} from '../../Style/Strings';
import Buttons from '../../Components/Buttons';
import {Images} from '../../Assets/Images/Images';
import {moderateScale, fontSizes} from '../../constants/appConstant';
import COLOURS from '../../Style/Colours';
import {AuthContext} from '../../Navigation/AuthProvider';
export default function CreateNewAccount({navigation}) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login, register} = useContext(AuthContext);

  const [city, setcity] = useState('city');
  const [mobilenumber, setmobilenumber] = useState('mobilenumber');
  const [country, setcountry] = useState('country');
  const [userImg, setuserImg] = useState('userImg');
  const [address, setaddress] = useState('address');
  const [about, setabout] = useState('about');

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.LeftArrow} source={Images.Back} />
      </TouchableOpacity>

      <Text style={styles.CreateNewAccount}>{String.CreateNewAccount}</Text>

      <Text style={styles.EnterYourDetials}>{String.EnterYourDetials}</Text>
      <ScrollView style={{flex: 10}}>
        <View style={styles.Box}>
          <TextBox
            TextName={String.FirstName}
            value={firstName}
            onChangeText={userfirstname => setFirstName(userfirstname)}
          />
        </View>

        <View style={styles.Box}>
          <TextBox
            TextName={String.LastName}
            value={lastName}
            onChangeText={userlastName => setLastName(userlastName)}
          />
        </View>

        <View style={styles.Box}>
          <TextBox
            TextName={String.YourMail}
            value={email}
            onChangeText={userEmail => setEmail(userEmail)}
          />
        </View>

        <View style={styles.Box}>
          <PasswordTextBox
            TextName={String.Password}
            value={password}
            onChangeText={userPassword => setPassword(userPassword)}
          />
        </View>
        <View style={styles.Buttons}>
          <Buttons
            onpress={() =>
              register(
                email,
                password,
                firstName,
                lastName,
                about,
                mobilenumber,
                country,
                city,
                userImg,
                address,
              )
            }
            text={String.CreateAccount}
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
  LeftArrow: {
    height: moderateScale(22),
    width: moderateScale(22),
    margin: moderateScale(17),
  },
  CreateNewAccount: {
    fontSize: fontSizes.FONT26,
    fontFamily: 'Merienda-Regular',
    color: COLOURS.Black,
    padding: moderateScale(20),
  },
  EnterYourDetials: {
    fontSize: fontSizes.FONT16,
    paddingHorizontal: moderateScale(20),
    color: COLOURS.LightGray,
    opacity: 0.5,
  },
  Box: {
    marginTop: '3%',
  },
  lastBox: {
    marginTop: '3%',
    paddingBottom: '10%',
  },
  Buttons: {
    marginTop: '15%',
    paddingBottom: '10%',
  },
});
