import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image, ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { moderateScale,fontSizes} from '../../../constants/appConstant'
import COLOURS from '../../../Style/Colours'
import { Images } from '../../../Assets/Images/Images'
const Rectangular_Box = ({cound,expire,heading,Bar}) => {
  return (
    <View
      style={{
        backgroundColor: COLOURS.LightWhite,
        padding: moderateScale(10),
        borderRadius: 15,
        borderWidth: 0.3,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <Text style={{fontSize: fontSizes.FONT36, color: COLOURS.Black,fontWeight:"600"}}>
          {cound}
        </Text>
        <Image
          style={{height: moderateScale(15), width: moderateScale(15)}}
          source={Images.right}
        />
      </View>
      <Text
        style={{
          fontSize: fontSizes.FONT20,
          color: COLOURS.Black,
          fontWeight: '500',
        }}>
        {heading}
      </Text>
      <Image
        source={Bar}
        style={{
          height: moderateScale(20),
          width: moderateScale(125),
          right: 10,
        }}
      />
      <Text
        style={{
          fontSize: fontSizes.FONT13,
          color: COLOURS.LightGray,
          opacity: 0.5,
        }}>
        {expire}
      </Text>
    </View>
  );
}

export default Rectangular_Box

const styles = StyleSheet.create({})