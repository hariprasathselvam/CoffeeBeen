import { StyleSheet, Text, View } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react'
import COLOURS from '../../../Style/Colours'
import { fontSizes,moderateScale} from '../../../constants/appConstant'
import { Images } from '../../../Assets/Images/Images'
import HomeBox from '../../../Components/HomeBox'
import { String } from '../../../Style/Strings'
export default function OptionBoz() {
  const navigation =useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.Box}>
        <View style={styles.Box1}>
          <Text style={{fontSize:fontSizes.FONT15,color:COLOURS.LightGray,opacity:0.7}}>Your card balance</Text>
          <Text style={{fontSize:fontSizes.FONT16,color:COLOURS.Black}}>$245</Text>
        </View>
        <View style={styles.Box2}>
          <HomeBox
          source={Images.topup}
          text={"Top Up"}
          onpress={() => navigation.navigate("TopUpIndex")}
          />
          <HomeBox
          source={Images.promo}
          text={"Promo"}
          onpress={()=>navigation.navigate("PromoIndex")}
          />
          <HomeBox
          source={Images.history}
          text={"History"}
          onpress={()=>navigation.navigate("HistoryIndex")}
          />
          <HomeBox
          source={Images.pay}
          text={"Pay"}
          onpress={() => navigation.navigate("PayIndex")}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Box:{
        // height:"15%",
        marginHorizontal:moderateScale(30),
        backgroundColor:COLOURS.LightWhite,
        borderRadius:moderateScale(25),
        bottom:"50%"
      },
      Box1:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:moderateScale(20),
        marginTop:"3%"
      },
      Box2:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:moderateScale(20),
        padding:moderateScale(5),
        marginTop:"5%",
      },
})