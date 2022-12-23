import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import {fontSizes,moderateScale} from '../constants/appConstant'
import COLOURS from '../Style/Colours'
export default function Buttons({text,type = "SignIn",TextColor="White",onpress}) {
  return (
    <View>
        <TouchableOpacity style={[styles.container, styles[`container_${type}`]]} onPress={onpress}>
          <Text style={[styles.container, styles[`container_${TextColor}`]]}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container_SignIn:{
        width:"85%",
        borderRadius:15,
        padding:moderateScale(13),
        alignSelf:"center",
        backgroundColor:COLOURS.Secondary,
    },
    container_Create:{
      width:"85%",
      borderRadius:15,
      padding:moderateScale(13),
      alignSelf:"center",
      borderWidth:0.5,
      borderColor:COLOURS.LightGray
  },
  container_White:{
        fontSize:fontSizes.FONT20,
        color:COLOURS.Primary,
        alignSelf:"center",
        fontWeight:"bold"
    },
    container_Black:{
      fontSize:fontSizes.FONT20,
      color:COLOURS.Black,
      alignSelf:"center",
      fontWeight:"bold"
  },

})