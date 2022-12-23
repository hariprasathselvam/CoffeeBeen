import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import COLOURS from '../../Style/Colours'
import {Images} from '../../Assets/Images/Images'
import {moderateScale,fontSizes} from '../../constants/appConstant'
import { String } from '../../Style/Strings'
import TextBox from '../../Components/TextBox'
import Buttons from '../../Components/Buttons'
export default function ForgetPassWord({navigation}) {
  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Image style={styles.LeftArrow} source={Images.Back}/>
      </TouchableOpacity>

      <Text style={styles.CreateNewAccount}>{String.ForgetYourPassword}</Text>

      <Text style={styles.EnterYourDetials}>{String.InputYourEmail}</Text>
      <View style={styles.TextBox}>
        <TextBox
        TextName={String.email}
        />
      </View>
      <View style={styles.Buttons}>
        <Buttons
        text={String.Submit}
        onpress={() => navigation.navigate("CreateNewPassWord")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
      },
      LeftArrow:{
        height:moderateScale(22),
        width:moderateScale(22),
        margin:moderateScale(17)
      },
      CreateNewAccount:{
        fontSize:fontSizes.FONT26,
        fontFamily:"Merienda-Regular",
        color:COLOURS.Black,
        padding:moderateScale(20)
      },
      EnterYourDetials:{
        fontSize:fontSizes.FONT16,
        paddingHorizontal:moderateScale(20),
        color:COLOURS.LightGray,
        opacity:0.5
      },
      TextBox:{
        marginTop:"10%"
      },
      Buttons:{
        marginTop:"15%"
      }
})