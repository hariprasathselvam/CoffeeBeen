import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Images} from "../../Assets/Images/Images"
import { moderateScale,fontSizes } from "../../constants/appConstant"
import { String } from '../../Style/Strings'
import COLOURS from '../../Style/Colours'
import Buttons from '../../Components/Buttons'
export default function DoneCreateAccount({navigation}) {
  return (
    <View style={styles.Container}>
        <Image source={Images.Coffee} style={styles.Image}/>
        <Text style={styles.Text1}>{String.Successfully}</Text>
        <Text style={styles.Text1}>{String.Createdanaccount}</Text> 
        <Text style={styles.Text2}>{String.DoneDiscription1}</Text>
        <Text style={styles.Text2}>{String.DoneDiscription2}</Text>
        <View style={styles.Buttons}>
            <Buttons
              text={String.Explore}
              onpress={() => navigation.navigate('BottamNavigationTap')}
            />
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
    Image:{
        height:moderateScale(200),
        width:moderateScale(200),
        marginBottom:"4%"
    },
    Text1:{
        fontSize:fontSizes.FONT26,
        fontFamily:"Merienda-Regular",
        color:COLOURS.Black,
        
    },
    Text2:{
        fontSize:fontSizes.FONT14,
        color:COLOURS.LightGray,
        opacity:0.5
    },
    Buttons:{
        marginTop:"15%",
        width:"85%"
    }
})