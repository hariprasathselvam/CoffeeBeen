import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Images } from '../Assets/Images/Images'
import { String } from '../Style/Strings'
import {moderateScale,fontSizes} from '../constants/appConstant'
import COLOURS from '../Style/Colours'
export default Categories =({image,head,subhead,Underline,onPress})=> {
  return (
    <View>
        <TouchableOpacity style={styles.Container} onPress={onPress}>
            <View style={styles.Circle}>
                <Image source={image} style={styles.CardImage} />
            </View>
            <View style={styles.CartTextContainer}>
                <Text style={styles.CartHeadText}>{head}</Text>
                <Text style={styles.CardSubHeadText}>{subhead}</Text> 
            </View>
        </TouchableOpacity>
        {/* <View style={styles.Underline}></View> */}
    </View>
  )
}
const styles = StyleSheet.create({
    Container:{
        flexDirection:"row",
    },
    Circle:{
        height:moderateScale(40),
        width:moderateScale(40),
        borderWidth:0.5,
        borderRadius:50,
        justifyContent:"center",
    },
    CardImage:{
        height:moderateScale(25),
        width:moderateScale(25),
        alignSelf:"center"
        

    },
    CartTextContainer:{
        marginLeft:"5%"
    },
    CartHeadText:{
        fontSize:fontSizes.FONT17,
        fontWeight:'bold',
        color:COLOURS.LightGray,
    },
    CardSubHeadText:{
        fontSize:fontSizes.FONT13,
        color:COLOURS.LightGray,
        opacity:0.5
    },
    CardMeetLink:{
        color:"skyblue",
    },
    Underline:{
        marginTop:"5%",
        height:1,
        width:"100%",
        backgroundColor:COLOURS.LightGray,
        opacity:0.4,
    }
})