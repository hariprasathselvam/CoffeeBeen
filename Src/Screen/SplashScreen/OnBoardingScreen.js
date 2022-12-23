import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {Images} from "../../Assets/Images/Images"
import Buttons from "../../Components/Buttons";
import { String } from "../../Style/Strings";
import {fontSizes,moderateScale} from '../../constants/appConstant'
import COLOURS from "../../Style/Colours";


const OnBoardingScreen = ({navigation}) => {
  const Onboarding1 = () => {
    setScreen2(true);
    setScreen1(false);
  };

  const Onboarding2 = () => {
    setScreen2(false);
    setScreen3(true);
  };

  const Onboarding3 = () => {
    navigation.navigate('SplashScreen');
  };

  const OnBoardingScreen1 = () => {
    return (
      <ImageBackground
        source={Images.OnBoardingScreen1}
        resizeMode="cover"
        style={styles.Image}>
        <View style={styles.Container}>
          <Text style={styles.Text1}>{String.OnBoradHead1}</Text>
          <Text style={styles.Text2}>{String.OnBoradDisc1}</Text>
          <View style={styles.Buttons}>
            <Buttons text={String.Next} onpress={Onboarding1} />
          </View>
        </View>
      </ImageBackground>
    );
  };
  const OnBoardingScreen2 = () => {
    return (
      <ImageBackground
        source={Images.OnBoardingScreen2}
        resizeMode="cover"
        style={styles.Image}>
        <View style={styles.Container}>
          <Text style={styles.Text1}>{String.OnBoradHead2}</Text>
          <Text style={styles.Text2}>{String.OnBoradDisc2}</Text>
          <View style={styles.Buttons}>
            <Buttons text={String.Next} onpress={Onboarding2} />
          </View>
        </View>
      </ImageBackground>
    );
  };
  const OnBoardingScreen3 = () => {
    return (
      <ImageBackground
        source={Images.OnBoardingScreen3}
        resizeMode="cover"
        style={styles.Image}>
        <View style={styles.Container}>
          <Text style={styles.Text1}>{String.OnBoradHead3}</Text>
          <Text style={styles.Text2}>{String.OnBoradDisc3}</Text>
          <View style={styles.Buttons}>
            <Buttons text={String.Next} onpress={Onboarding3} />
          </View>
        </View>
      </ImageBackground>
    );
  };

  const [screen1, setScreen1] = useState(true);
  const [screen2, setScreen2] = useState(false);
  const [screen3, setScreen3] = useState(false);

  return (
    <View style={{flex: 1}}>
      {screen1 ? <OnBoardingScreen1 /> : null}
      {screen2 ? <OnBoardingScreen2 /> : null}
      {screen3 ? <OnBoardingScreen3 /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  Container: {
    marginBottom: '10%',
  },
  Text1: {
    fontSize: fontSizes.FONT30,
    fontFamily: 'Merienda-Bold',
    paddingHorizontal: moderateScale(40),
    color: COLOURS.Primary,
  },
  Text2: {
    marginTop: '2%',
    fontSize: fontSizes.FONT17,
    paddingHorizontal: moderateScale(40),
    color: COLOURS.Primary,
    opacity: 0.5,
  },
  Buttons: {
    marginTop: '10%',
  },
});

export default OnBoardingScreen;

