import { Image, StyleSheet, Text, View,FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import { Images } from '../../../../Assets/Images/Images'
import CoffeeShop from '../../../../Assets/StaticData/CoffeeShopsData';
import { useNavigation, useRoute } from "@react-navigation/native";
import CoffeeScreenIndex from '../../CoffeeScreen/CoffeeScreenIndex';

import { connect, useSelector } from 'react-redux'
import { moderateScale } from '../../../../constants/appConstant';

const  Pop_PlaceBox = (props) => {

  const navigation =useNavigation()

  const {wishlist,Coffees} = useSelector((state) => state.CoffeeReducer)

  const [loading,setLoding]=useState(false)



  const Item = ({Data,}) => (
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('DetialsScreenindex', Data)} style={{}}>
    <View style={{flexDirection:"row"}}>
          <Image style={{height:moderateScale(150),width:moderateScale(125),borderRadius:moderateScale(25)}} source={{uri:Data.Picture}}/>
      
      <View style={{marginLeft:moderateScale(15),marginTop:moderateScale(15)}}>
        <Text style={{fontSize:moderateScale(22),color:"black"}}>{Data.name}</Text>
        <View style={{flexDirection:"row",top:'5%'}}>
          <Image source={Images.rating} style={{height:moderateScale(30),width:moderateScale(80)}}/>
          <Text style={{fontSize:moderateScale(19),left:"50%",color:"gray"}}>{Data.Rating}</Text>
        </View>
        <Text style={{top:"15%",fontSize:moderateScale(18),color:"gray"}}>{Data.location}</Text>
      </View>
    </View>
    </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item Data={item} />
  );

  return (
    <View style={{}}>
      <ScrollView horizontal={true}>
        {loading ? ( <CoffeeScreenIndex />

        ) : (
          <FlatList
          data={Coffees.slice(0, 1)}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
          
        )}
      </ScrollView>
    </View>
  );
}


export default Pop_PlaceBox

const styles = StyleSheet.create({})