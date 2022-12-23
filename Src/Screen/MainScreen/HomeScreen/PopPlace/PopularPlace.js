import { StyleSheet, Text, View ,Image,ScrollView, TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import COLOURS from '../../../../Style/Colours'
import { String } from '../../../../Style/Strings'
import { fontSizes, moderateScale} from '../../../../constants/appConstant'
import { Images } from '../../../../Assets/Images/Images'
import Pop_PlaceBox from './Pop_PlaceBox'
import { useNavigation, useRoute } from "@react-navigation/native";

export default function PopularPlace(Props) {
  const navigation =useNavigation();
  return (
    <View>
        <View style={styles.PopPlace}>
           <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                <Text style={{fontSize:fontSizes.FONT20,color:COLOURS.Black}}>Popular Place</Text>
                <TouchableOpacity onPress={() => navigation.navigate("ViewAllPopPlace")}>
                    <Text style={{color:COLOURS.LightGreen}}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Pop_PlaceBox}>
               <Pop_PlaceBox/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    PopPlace:{
        paddingHorizontal:moderateScale(20),
        paddingBottom:"10%"
      },
    Pop_PlaceBox:{
      marginTop:"5%",
      }
})