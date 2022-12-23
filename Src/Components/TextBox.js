import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {fontSizes, moderateScale} from '../constants/appConstant';
import COLOURS from '../Style/Colours';
export default function TextBox({
  TextName,
  PlaceHolder,
  value,
  onChangeText,
  error,
  keyboardType,
}) {
  return (
    <View style={styles.container}>
      {error ? (
        <View>
          <Text style={styles.Text}>{TextName}</Text>
          <TextInput
            value={value}
            style={styles.TextInput1}
            placeholder={PlaceHolder}
            placeholderTextColor={COLOURS.Red}
            onChangeText={onChangeText}
            autoCapitalize="none"
            keyboardType={keyboardType}
          />
          <Text
            style={{
              marginTop: 12,
              color: COLOURS.Red,
              fontSize: 14,
              marginHorizontal: moderateScale(10),
            }}>
            {error}
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.Text}>{TextName}</Text>
          <TextInput
            value={value}
            style={styles.TextInput}
            placeholder={PlaceHolder}
            placeholderTextColor={COLOURS.LightGray}
            onChangeText={onChangeText}
            autoCapitalize="none"
            keyboardType={keyboardType}
          />
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
  Text1: {
    fontSize: fontSizes.FONT17,
    color: COLOURS.Red,
  },
  TextInput: {
    borderWidth: 0.5,
    borderRadius: 15,
    marginTop: '3.5%',
    padding: moderateScale(10),
    fontSize: fontSizes.FONT15,
    borderColor: COLOURS.LightGray,
  },
  TextInput1: {
    borderWidth: 0.5,
    borderRadius: 15,
    marginTop: '3.5%',
    padding: moderateScale(10),
    fontSize: fontSizes.FONT15,
    borderColor: COLOURS.Red,
  },
});
