import { StyleSheet, Text, View ,ImageBackground} from 'react-native'
import React from 'react'
import { Images } from '../../../../Assets/Images/Images'
import { String } from '../../../../Style/Strings'
import Buttons from '../../../../Components/Buttons'
import { fontSizes,moderateScale } from '../../../../constants/appConstant'
import COLOURS from '../../../../Style/Colours'
const PayIndex = () => {
    return(
        <ImageBackground source={Images.OnBoardingScreen1} resizeMode="cover" style={styles.Image}>
          <View style={styles.Container}>
            <Text style={styles.Text1}>{String.OnBoradHead1}</Text>
            <Text style={styles.Text2} >{String.OnBoradDisc1}</Text>
            <View style={styles.Buttons}>
                <Buttons
                text={String.Next}
                />
            </View>
          </View>
        </ImageBackground>
  
    )
  
  }

export default PayIndex

const styles = StyleSheet.create({
  Image: {
    flex: 1,
    justifyContent:"flex-end"
  },
  Container:{
    marginBottom:"10%"
  },
  Text1:{
    fontSize:fontSizes.FONT30,
    fontFamily:"Merienda-Bold",
    paddingHorizontal:moderateScale(40),
    color:COLOURS.Primary,
  },
  Text2:{
    marginTop:'2%',
    fontSize:fontSizes.FONT17,
    paddingHorizontal:moderateScale(40),
    color:COLOURS.Primary,
    opacity:0.5,
  },
  Buttons:{
    marginTop:"10%"
  }
})