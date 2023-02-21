import {Image,StyleSheet,Text,View,FlatList,TouchableOpacity,} from 'react-native';
import React,{useEffect,useState} from 'react';
import { Images } from '../../../../Assets/Images/Images';
import CoffeeShop from '../../../../Assets/StaticData/CoffeeShopsData';
import { moderateScale, fontSizes} from '../../../../constants/appConstant';
import { String } from '../../../../Style/Strings';
import COLOURS from '../../../../Style/Colours';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';

import { connect,useDispatch,useSelector } from 'react-redux'
import * as Action from '../../../../redux/actions'

const ViewAllFavoPlace = (props) => {

  const navigation = useNavigation()

  const Dispatch = useDispatch()

  const {wishlist,Coffees} = useSelector((state) => state.CoffeeReducer)

  const [letyet,setLetyet]=useState(false)

  let arr = wishlist
  let len = arr.length

  console.log(len)

  const removeFromWishlist = (data) => Action.removeFromWishlist007(data);

  useEffect(()=>{
      if (len==0){
        setLetyet(false)
      }
      else{
        setLetyet(true)
      }
  })



  const onTapRemoveFromWishlist = (movie) => {
    Dispatch(removeFromWishlist(movie))
}

  const Item = ({Data}) => (
    <View style={{flex: 1, marginBottom: '5%'}}>
      <TouchableOpacity
      onPress={() => navigation.navigate('DetialsScreenindex', Data)}
      >
        <View
          style={{
            height: 200,
            width: '100%',
            backgroundColor: COLOURS.LightWhite,
            borderRadius: 15,
          }}>
          <Image
            style={{
              height: '50%',
              width: '100%',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              resizeMode: 'cover',
            }}
            source={{uri:Data.Picture}}
          />
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 15,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 17, fontWeight: '500', color: 'black'}}>
              {Data.name}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={Images.location}
                style={{height: 18, width: 18, opacity: 0.5}}
              />
              <Text style={{fontSize: 15, opacity: 0.5}}>{Data.KM}</Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 15, marginTop: 7}}>
            <Text style={{fontSize: 15, opacity: 0.8}}>{Data.location}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 7,
                }}>
                <Image source={Images.favo} style={{height: 18, width: 18}} />
                <Text style={{left: 5, opacity: 1, fontSize: 15}}>
                  {Data.Rating}
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => onTapRemoveFromWishlist(Data)}>
                  <Image
                    source={Images.heartfill}
                    style={{
                      height: moderateScale(18),
                      width: moderateScale(18),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );



  const renderItem = ({item}) => <Item Data={item} />;

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
          Favorite Place
        </Text>
      </View>
      {letyet ? (
        <View
          style={{flex: 1, width: '90%', alignSelf: 'center', marginTop: '5%'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={wishlist}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View
          style={{
            flex:0.8,
            width: '90%',
            alignSelf: 'center',
            justifyContent:"center"
          }}>
          <Lottie
            source={require('../../../../Assets/Animation/empty-box.json')}
            style={styles.Like}
            autoPlay={true}
          />
          <Text style={styles.Text}>{`You haven't added any Coffees yet`}</Text>
          <Text style={styles.SubText}>{`Click  ❤️  to add favorites`}</Text>
        </View>
      )}
    </View>
  );
}



export default ViewAllFavoPlace

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.Primary,
  },
  Like: {
    height: moderateScale(250),
    width: moderateScale(250),
    alignSelf:"center"
  },
  Text:{
    alignSelf:"center",
    fontSize:fontSizes.FONT17,
    color:COLOURS.Black,
    fontWeight:"400",
    opacity:0.7

  },
  SubText:{
    alignSelf:"center",
    fontSize:fontSizes.FONT13,
    color:COLOURS.LightGray,
    opacity:0.5

  }
});
