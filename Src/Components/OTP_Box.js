import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import COLOURS from '../Style/Colours'
export default function OTP_Box({onChange,Reference,value}) {
  return (
    <View>
        <TextInput style={styles.OTP_Box}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={onChange}
            ref={Reference}
            value={value}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    OTP_Box:{
        height:45,
        width:50,
        textAlign:"center",
        borderWidth:0.5,
        borderColor:COLOURS.LightGray,
        borderRadius:10
    }
})