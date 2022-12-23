import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import COLOURS from '../../../../Style/Colours'
import { fontSizes,moderateScale} from '../../../../constants/appConstant'
import { Images } from '../../../../Assets/Images/Images'
import HomeBox from '../../../../Components/HomeBox'
import { String } from '../../../../Style/Strings'
import Categories from '../../../../Components/Categories'
import { useNavigation, useRoute } from "@react-navigation/native";
export default function Myreward() {

    const navigation =useNavigation();
  return (
    <View>
        <View style={styles.Myreward}>
            <View style={{flexDirection:"row",padding:5,justifyContent:"space-between",paddingHorizontal:15}}>
                <Text style={{fontSize:fontSizes.FONT20,color:COLOURS.Black}}>Myreward</Text>
                <TouchableOpacity onPress={() => navigation.navigate("ViewAllMyreward")}>
                    <Text style={{color:COLOURS.LightGreen}}>View All</Text>
                </TouchableOpacity>
            </View>

            <View style={{borderWidth:0.5,borderRadius:15,marginHorizontal:20,flexDirection:"row",padding:15,marginTop:"5%",backgroundColor:COLOURS.LightWhite}}>
                <Categories
                head={"Free 1 Coffee"}
                subhead={"Buy 10 Coffee and get 1 coffee for free"}
                image={Images.Coffee}  />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Myreward:{
    }
})