import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { fontSizes,moderateScale } from '../constants/appConstant'
import COLOURS from '../Style/Colours'
export default function HomeBox({source,text,onpress}) {
  return (
    <View>
        <TouchableOpacity style={styles.View} onPress={onpress}>
            <Image source={source} style={styles.Image}/>
            <Text style={styles.Text}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    View:{
        alignItems:"center"
    },
    Image:{
        height:moderateScale(24),
        width:moderateScale(24),
        tintColor:COLOURS.Black,
        opacity:0.8
    },
    Text:{
        fontSize:fontSizes.FONT12,
        color:COLOURS.LightGray,
        opacity:0.5
    }
})