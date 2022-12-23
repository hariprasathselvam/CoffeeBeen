import { StyleSheet} from 'react-native'
import COLOURS from '../../Style/Colours'
import {moderateScale,fontSizes} from "../../constants/appConstant"
export const styles = StyleSheet.create({
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
      Box:{
        marginTop:"5%",
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:moderateScale(20)
      },
      SendCodeReload:{
        fontSize:fontSizes.FONT15,
        color:COLOURS.LightGray,
        opacity:0.5,
        marginTop:"5%",
      },
      Time:{
        height:50,
        alignSelf:"flex-end",
        marginHorizontal:moderateScale(20)
      },
      resendButtonTextStyle:{
        color:COLOURS.Blue
      },
      Buttons:{
        top:"50%"
      }

})