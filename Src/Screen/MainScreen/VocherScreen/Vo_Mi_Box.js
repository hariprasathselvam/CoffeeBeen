import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image, ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { moderateScale,fontSizes} from '../../../constants/appConstant'
import COLOURS from '../../../Style/Colours'
import { Images } from '../../../Assets/Images/Images'
import { useNavigation } from '@react-navigation/native'
import Categories from '../../../Components/Categories'
const Vo_Mi_Box = ({image,head,subhead,expire,available,Heading}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: moderateScale(20),
          marginTop: '5%',
        }}>
        <Text style={{fontSize: fontSizes.FONT20, color: COLOURS.Black}}>
          {Heading}
        </Text>
        <TouchableOpacity>
          <Text style={{color: COLOURS.LightGreen}}>View All</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          marginHorizontal: moderateScale(20),
          backgroundColor: COLOURS.LightWhite,
          padding: moderateScale(15),
          marginTop: '5%',
          borderRadius: 15,
          borderWidth: 0.3,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Categories
            head={head}
            //'Buy 10 Coffee'
            subhead={subhead}
            //'Buy 10 Coffee and get 1 coffee for free'
            image={image}
          />
          <Text
            style={{
              fontSize: fontSizes.FONT17,
              fontWeight: '500',
              color: COLOURS.Secondary,
              right: '25%',
            }}>
            {available}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Image
            source={Images.history}
            style={{
              height: moderateScale(20),
              width: moderateScale(20),
              tintColor: COLOURS.Red,
            }}
          />
          <Text style={{color: COLOURS.Red}}>{expire}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Vo_Mi_Box

const styles = StyleSheet.create({})