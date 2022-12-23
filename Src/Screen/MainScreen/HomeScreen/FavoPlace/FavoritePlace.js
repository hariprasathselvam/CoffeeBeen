import { StyleSheet, Text, View ,Image,ScrollView, TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import COLOURS from '../../../../Style/Colours'
import { String } from '../../../../Style/Strings'
import { fontSizes, moderateScale} from '../../../../constants/appConstant'
import { Images } from '../../../../Assets/Images/Images'
import FavoPlaceFlatList from './FavoPlaceFlatList'
import { useNavigation } from '@react-navigation/native'
import CoffeeScreenIndex from '../../CoffeeScreen/CoffeeScreenIndex'
export default function FavoritePlace() {

    const navigation =useNavigation();
  return (
    <View>
        <View style={styles.FavoPlace}>
            <View style={{}}>
                <View style={{flexDirection:"row",padding:5,justifyContent:"space-between",paddingHorizontal:15}}>
                    <Text style={{fontSize:fontSizes.FONT20,color:COLOURS.Black}}>Favorite Place</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ViewAllFavoPlace',)} >
                        <Text style={{color:COLOURS.LightGreen}}>View All</Text>
                    </TouchableOpacity>
                </View>

                <FavoPlaceFlatList/>
                {/* <CoffeeScreenIndex/> */}

            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    FavoPlace:{
        marginTop:"5%"
    }
})