import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLOURS from '../../Style/Colours';
import { String } from '../../Style/Strings';
import {moderateScale,fontSizes} from '../../constants/appConstant'
export default function SplashScreen({navigation}) {
    setTimeout(() => {
        navigation.replace("LoginScreen")
    }, 500);
  return (
    <View style={styles.Container}>
        <View style={styles.HeaderTextView}>
            <Text style={styles.HeaderText1}>{String.Coffee}</Text>
            <Text style={styles.HeaderText2}>{String.Been}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    },
    HeaderTextView:{
        flexDirection:"row"
    },
    HeaderText1:{
        fontSize:fontSizes.FONT34,
        color:COLOURS.Secondary,
        fontFamily:"Merienda-Bold"
    },
    HeaderText2:{
        fontSize:fontSizes.FONT34,
        color:COLOURS.Black,
        fontFamily:"Merienda-Bold"
    },

})