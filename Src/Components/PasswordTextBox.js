import {Image,StyleSheet,Text,TextInput,TouchableOpacity,View,} from 'react-native';
import React, {useState} from 'react';
import {fontSizes, moderateScale} from '../constants/appConstant';
import COLOURS from '../Style/Colours';
import {Images} from '../Assets/Images/Images';

export default function PasswordTextBox({TextName,PlaceHolder,value,onChangeText,error,}) {

  const [HideShow, setHideShow] = useState(true);

  return (
    <View style={styles.container}>
      {error ? (
        <View>
          <Text style={styles.Text}>{TextName}</Text>
          <View style={styles.ViewHide1}>
            <TextInput
              value={value}
              onChangeText={onChangeText}
              style={styles.TextInput1}
              placeholder={PlaceHolder}
              placeholderTextColor={COLOURS.Red}
              secureTextEntry={HideShow}
            />
            <TouchableOpacity
              style={styles.Image}
              onPress={() => {
                setHideShow(prev => !prev);
              }}>
              {HideShow ? (
                <Image source={Images.view} style={{height: 22, width: 22}} />
              ) : (
                <Image source={Images.hide} style={{height: 22, width: 22}} />
              )}
            </TouchableOpacity>
          </View>
          {error && (
            <Text
              style={{
                marginTop: 8,
                color: 'red',
                fontSize: 14,
                marginHorizontal: moderateScale(10),
              }}>
              {error}
            </Text>
          )}
        </View>
      ) : (
        <View>
          <Text style={styles.Text}>{TextName}</Text>
          <View style={styles.ViewHide}>
            <TextInput
              value={value}
              onChangeText={onChangeText}
              style={styles.TextInput}
              placeholder={PlaceHolder}
              placeholderTextColor={COLOURS.LightGray}
              secureTextEntry={HideShow}
            />
            <TouchableOpacity
              style={styles.Image}
              onPress={() => {
                setHideShow(prev => !prev);
              }}>
              {HideShow ? (
                <Image source={Images.view} style={{height: 22, width: 22}} />
              ) : (
                <Image source={Images.hide} style={{height: 22, width: 22}} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '7%',
  },
  Text: {
    fontSize: fontSizes.FONT17,
    color: COLOURS.LightGray,
  },
  TextInput: {
    width: '85%',
    borderRadius: 15,
    padding: moderateScale(10),
    fontSize: fontSizes.FONT15,
  },
  TextInput1: {
    width: '85%',
    borderRadius: 15,
    padding: moderateScale(10),
    fontSize: fontSizes.FONT15,
  },
  Image: {
    marginRight: '5%',
  },
  ViewHide: {
    marginTop: '3.5%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 15,
    justifyContent: 'space-between',
    borderColor: COLOURS.LightGray,
  },
  ViewHide1: {
    marginTop: '3.5%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 15,
    justifyContent: 'space-between',
    borderColor: COLOURS.Red,
  },
});
