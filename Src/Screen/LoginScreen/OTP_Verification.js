import React, {useState, useRef, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';
import {String} from '../../Style/Strings';
import Buttons from '../../Components/Buttons';
import {Images} from '../../Assets/Images/Images';
import {moderateScale, fontSizes} from '../../constants/appConstant';
import COLOURS from '../../Style/Colours';
import OTP_Box from '../../Components/OTP_Box';
import {styles} from '../LoginScreen/OTP_Verification_Style';
import TextBox from '../../Components/TextBox';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../../Navigation/AuthProvider';
import RnOtpTimer from 'rn-otp-timer';

export default function OTP_Verification({navigation}) {
  const {mobileLogin, verifyOTP} = useContext(AuthContext);

  const [confirm, setConfirm] = useState(null);

  const [mobilenumber, setmobilenumber] = useState('');

  const [loading, setLoading] = useState(false);

  async function signInWithPhoneNumber() {
    const number = '+91' + mobilenumber;
    // console.log(number);
    const confirmation = mobileLogin(number);
    setConfirm(confirmation);
  }

  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [n4, setN4] = useState('');
  const [n5, setN5] = useState('');
  const [n6, setN6] = useState('');

  const otps = n1 + n2 + n3 + n4 + n5 + n6;
  const first = useRef('');
  const second = useRef('');
  const third = useRef('');
  const fourth = useRef('');
  const five = useRef('');
  const six = useRef('');

  const SetupDone = () => {
    verifyOTP(otps);
  };
  const onVerify = () => {
    if (n1 == '' || n2 == '' || n3 == '' || n4 == '' || n5 == '' || n6 == '') {
      alert('Plase enter valid OTP');
    } else {
      SetupDone();
    }
  };

  if (!confirm) {
    return (
      <View style={style.Container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={style.LeftArrow} source={Images.Back} />
        </TouchableOpacity>

        <Spinner visible={loading} />

        <Text style={style.CreateNewAccount}>{String.LoginwithMobile}</Text>

        <Text style={style.EnterYourDetials}>{String.EnterMobilenumber}</Text>
        <View style={style.TextBox}>
          <TextBox
            TextName={String.Phone}
            value={mobilenumber}
            onChangeText={setmobilenumber}
            keyboardType={'number-pad'}
          />
        </View>
        <View style={style.Buttons}>
          <Buttons text={String.Submit} onpress={signInWithPhoneNumber} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.LeftArrow} source={Images.Back} />
      </TouchableOpacity>

      <Text style={styles.CreateNewAccount}>{String.CreateNewAccount}</Text>

      <Text style={styles.EnterYourDetials}>{String.OTP_Verification}</Text>

      <View style={styles.Box}>
        <OTP_Box
          Reference={first}
          value={n1}
          onChange={text => {
            setN1(text);
            text && second.current.focus();
          }}
        />

        <OTP_Box
          Reference={second}
          value={n2}
          onChange={text => {
            setN2(text);
            text ? third.current.focus() : first.current.focus();
          }}
        />

        <OTP_Box
          Reference={third}
          value={n3}
          onChange={text => {
            setN3(text);
            text ? fourth.current.focus() : second.current.focus();
          }}
        />

        <OTP_Box
          Reference={fourth}
          value={n4}
          onChange={text => {
            setN4(text);
            text ? five.current.focus() : third.current.focus();
          }}
        />

        <OTP_Box
          Reference={five}
          value={n5}
          onChange={text => {
            setN5(text);
            text ? six.current.focus() : fourth.current.focus();
          }}
        />
        <OTP_Box
          Reference={six}
          value={n6}
          onChange={text => {
            setN6(text);
            !text && five.current.focus();
          }}
        />
      </View>

      <View style={styles.Time}>
        <RnOtpTimer
          minutes={0}
          seconds={60}
          // resendButtonStyle={styles.resendButtonStyle}
          resendButtonTextStyle={styles.resendButtonTextStyle}
          resendButtonAction={signInWithPhoneNumber}
        />
      </View>

      <View style={styles.Buttons}>
        <Buttons onpress={onVerify} text={String.Submit} />
      </View>
      
    </View>
  );
}

const style = StyleSheet.create({
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
  TextBox: {
    marginTop: '10%',
  },
  Buttons: {
    marginTop: '10%',
  },
});
