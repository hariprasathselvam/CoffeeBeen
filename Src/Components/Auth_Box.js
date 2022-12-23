import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Images} from '../Assets/Images/Images'
import COLOURS from '../Style/Colours'
import React from 'react'
import {moderateScale} from '../constants/appConstant'
export default function Auth_Box({Value,onpress}) {
  return (
    <View>
        <TouchableOpacity style={styles.Container} onPress={onpress}>
            <Image source={Value} style={styles.Image}/>
        </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        marginHorizontal:50,
        height:moderateScale(50),
        width:moderateScale(50),
        borderWidth:0.5,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:10,
        borderColor:COLOURS.LightGray
        
    },
    Image:{
        height:moderateScale(25),
        width:moderateScale(25),
    }
})