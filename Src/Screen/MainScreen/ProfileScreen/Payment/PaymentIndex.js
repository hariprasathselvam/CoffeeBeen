import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import COLOURS from '../../../../Style/Colours'
import { fontSizes, moderateScale, } from '../../../../constants/appConstant'
import TextBox from '../../../../Components/TextBox'
import { Images } from '../../../../Assets/Images/Images'
const PaymentIndex = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLOURS.LightGreen}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{height: 22, width: 22, margin: 10}}>
        <Image
          source={Images.Back}
          style={{height: 22, width: 22, margin: 10}}
        />
      </TouchableOpacity>

      <View
        style={{
          marginTop: '35%',
          backgroundColor: COLOURS.Primary,
          flex: 1,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
        }}>
        <View
          style={{
            height: 200,
            width: 300,
            backgroundColor: COLOURS.Blue,
            alignSelf: 'center',
            borderRadius: 20,
            bottom: '15%',
          }}>
          <Text
            style={{alignSelf: 'flex-end', paddingHorizontal: 30, top: '10%'}}>
            {/* {route.params.date} */}
          </Text>
          <Image
            source={Images.chip}
            style={{height: 40, width: 40, left: '10%', top: '15%'}}
          />
          <Text
            style={{
              fontSize: fontSizes.FONT18,
              fontWeight: '500',
              left: '10%',
              top: '25%',
              letterSpacing: 2,
            }}>
            {/* {route.params.cardnumber} */}
          </Text>
          <Text
            style={{
              fontSize: fontSizes.FONT18,
              fontWeight: '500',
              left: '10%',
              top: '30%',
              letterSpacing: 2,
            }}>
            {/* {route.params.name} */}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentIndex

const styles = StyleSheet.create({});
