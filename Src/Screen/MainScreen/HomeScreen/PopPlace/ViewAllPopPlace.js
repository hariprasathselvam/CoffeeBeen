import {Image,StyleSheet,Text,View,FlatList,TouchableOpacity,} from 'react-native';
import React,{useEffect} from 'react';
import {Images} from '../../../../Assets/Images/Images';
import CoffeeShop from '../../../../Assets/StaticData/CoffeeShopsData';
import {moderateScale, fontSizes} from '../../../../constants/appConstant';
import COLOURS from '../../../../Style/Colours';
import { useNavigation } from '@react-navigation/native';

import { connect } from 'react-redux'
import { fetchCoffee, addToWishList, removeFromWishlist } from '../../../../redux/actions'
import LikeButton from '../../../../Components/LikeButton';

const ViewAllPopPlace = (props) => {

  const navigation =useNavigation()

  
  const { CoffeeReducer, fetchCoffee, addToWishList, removeFromWishlist } = props;

  const { Coffees, wishlist } = CoffeeReducer;

  useEffect(() => {
    fetchCoffee()
  }, [])

  const onTapAddToWishlist = (movie) => {
    console.log(movie);

    addToWishList(movie)
}

const onTapRemoveFromWishlist = (movie) => {
    removeFromWishlist(movie)

}


const isExist = (movie) => {
    
    if(wishlist.filter(item => item.id === movie.id).length > 0){
        return true
    }

    return false
}


  const Item = ({Data}) => (
    <View
      style={{marginTop: '5%', padding: moderateScale(5), borderRadius: 20}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetialsScreenindex', Data)}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 150, width: 125, borderRadius: 25}}
            source={{uri: Data.Picture}}
          />

          <View style={{left: '10%'}}>
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
                fontSize: 20,
                color: 'black',
                fontWeight: '500',
                bottom: '5%',
              }}>
              {Data.name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image source={Images.rating} style={{height: 30, width: 80}} />
              <Text style={{fontSize: 19, left: '50%', color: 'gray'}}>
                {Data.Rating}
              </Text>
            </View>
            <View style={{top: '5%'}}>
              <Text style={{fontSize: 16, color: 'gray', opacity: 0.5}}>
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
          height: 22,
          width: 22,
          marginTop: '5%',
          marginHorizontal: moderateScale(20),
        }}
      />
      </TouchableOpacity>

      <View style={{marginTop: '5%', marginHorizontal: moderateScale(20)}}>
        <Text
          style={{
            fontSize: fontSizes.FONT20,
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


const mapStateToProps = (state) => ({
  CoffeeReducer: state.CoffeeReducer
})

export default connect(mapStateToProps, { fetchCoffee, addToWishList, removeFromWishlist })(ViewAllPopPlace)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.Primary,
  },
});
