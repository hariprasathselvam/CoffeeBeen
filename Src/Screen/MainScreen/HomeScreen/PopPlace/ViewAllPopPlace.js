import {Image,StyleSheet,Text,View,FlatList,TouchableOpacity,} from 'react-native';
import React,{useEffect} from 'react';
import {Images} from '../../../../Assets/Images/Images';
import CoffeeShop from '../../../../Assets/StaticData/CoffeeShopsData';
import {moderateScale, fontSizes} from '../../../../constants/appConstant';
import COLOURS from '../../../../Style/Colours';
import { useNavigation } from '@react-navigation/native';

import { connect, useDispatch,useSelector } from 'react-redux'
import LikeButton from '../../../../Components/LikeButton';
import * as Action from '../../../../redux/actions'

export default ViewAllPopPlace = (props) => {

  const navigation =useNavigation()
  const Dispatch = useDispatch()

  const addToWishList = (data) => Action.addToWishList007(data);

  const removeFromWishlist = (data) => Action.removeFromWishlist007(data);

  const {wishlist,Coffees} = useSelector((state) => state.CoffeeReducer)

  const onTapAddToWishlist = (movie) => {
    Dispatch(addToWishList(movie));
}

const onTapRemoveFromWishlist = (movie) => {
    Dispatch(removeFromWishlist(movie))


}


const isExist = (movie) => {
    
    if(wishlist.filter(item => item.id === movie.id).length > 0){
        return true
    }

    return false
}


  const Item = ({Data}) => (
    <View
      style={{marginTop: '5%', padding: moderateScale(5), borderRadius: moderateScale(20)}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetialsScreenindex', Data)}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: moderateScale(150), width: moderateScale(125), borderRadius: moderateScale(25)}}
            source={{uri: Data.Picture}}
          />

          <View style={{left: '15%'}}>
            <View style={{alignSelf: 'flex-end'}}>
              {isExist(Data) ? (
                <TouchableOpacity onPress={() => onTapRemoveFromWishlist(Data)}>
                  <Image source={Images.heartfill} style={{height:moderateScale(20),width:moderateScale(20)}}/>
                </TouchableOpacity>
              ) : (
                // onPress={() => onTapRemoveFromWishlist(Data)}
                <TouchableOpacity
                  // onPress={() => onTapAddToWishlist(Data)}
                  onPress={() => onTapAddToWishlist(Data)}>
                  <Image source={Images.heart} style={{height:moderateScale(20),width:moderateScale(20)}}/>
                </TouchableOpacity>
              )}
            </View>
            <Text
              style={{
                fontSize: moderateScale(20),
                color: 'black',
                fontWeight: '500',
                bottom: '5%',
              }}>
              {Data.name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image source={Images.rating} style={{height: moderateScale(30), width: moderateScale(80)}} />
              <Text style={{fontSize: moderateScale(19), left: '50%', color: 'gray'}}>
                {Data.Rating}
              </Text>
            </View>
            <View style={{top: '5%'}}>
              <Text style={{fontSize: moderateScale(16), color: 'gray', opacity: 0.5}}>
                {Data.location}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )

  const renderItem = ({item}) => <Item Data={item} />

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={Images.Back}
        style={{
          height: moderateScale(22),
          width: moderateScale(22),
          marginTop: '5%',
          marginHorizontal: moderateScale(20),
        }}
      />
      </TouchableOpacity>

      <View style={{marginTop: '5%', marginHorizontal: moderateScale(20)}}>
        <Text
          style={{
            fontSize: moderateScale(20),
            color: COLOURS.Secondary,
            fontFamily: 'Merienda-Bold',
            
          }}>
          PopularPlace
        </Text>
      </View>
      <View style={{flex: 1, width: '90%', alignSelf: 'center'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Coffees}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.Primary,
  },
});
