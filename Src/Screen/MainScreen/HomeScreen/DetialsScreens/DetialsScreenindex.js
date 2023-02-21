import {Image,StyleSheet,Text,TouchableOpacity,View,FlatList,} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';
import COLOURS from '../../../../Style/Colours';
import {moderateScale, fontSizes} from '../../../../constants/appConstant';
import {Images} from '../../../../Assets/Images/Images';
import CoffeeShop from '../../../../Assets/StaticData/CoffeeShopsData';
import Categories from '../../../../Components/Categories';
import {ScrollView} from 'react-native-virtualized-view';
import LikeButton from '../../../../Components/LikeButton';

import { connect, useSelector } from 'react-redux'
import * as Action from '../../../../redux/actions'
import { useDispatch } from "react-redux";


const DetialsScreenindex = ({navigation, route,}) => {

  useEffect(()=>{
  })

  const Data = route.params

  const Dispatch = useDispatch();

  const addToWishList = (data) => Action.addToWishList007(data);

  const removeFromWishlist = (data) => Action.removeFromWishlist007(data);

  const {wishlist} = useSelector((state) => state.CoffeeReducer)

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



  

  const PRICE = Data.CoffeeAndPrice

  const REVIEW = Data.Review


  const [Focus, setFocus] = useState(true)
  const [colour, setColour] = useState(COLOURS.Secondary)
  const [colour1, setColour1] = useState(COLOURS.LightGray)

  const [more, setReadMore] = useState(false)

  const [liked, setLiked] = useState(false)

  const [cart,setCart] = useState([])

  const DetialsList = () => {
    setFocus(true)
    setColour1(COLOURS.LightGray)
    setColour(COLOURS.Secondary)
  };
  const CoffeeList = () => {
    setFocus(false)
    setColour1(COLOURS.Secondary)
    setColour(COLOURS.LightGray)
  };


  const Item = ({id, title, selected, onSelect, prices}) => (
    <View style={{padding: moderateScale(5), borderRadius: 20}}>
      <TouchableOpacity onPress={() => onSelect(id)}>
        <View
          style={[
            styles.item,
            {
              backgroundColor: selected
                ? COLOURS.LightGreen
                : COLOURS.LightWhite,
            },
          ]}>
          <Categories head={title} subhead={prices} image={Images.Coffee} />
        </View>
      </TouchableOpacity>
    </View>
  );


  const ReviewItem = ({Data}) => (
    <View style={{paddingHorizontal: 20, marginTop: '5%'}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            source={{uri:Data.reviewPic}}
            style={{height: moderateScale(50), width: moderateScale(50), borderRadius: moderateScale(50),resizeMode:"contain"}}
          />
        </View>

        <View style={{left: '10%'}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={styles.DescriptionText}>{Data.username}</Text>
            <Text style={[styles.DescriptionText,{left: 125}]}>{Data.date}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.DescriptionText}>Soft Suave</Text>
            <Image
              source={Images.rating}
              style={{height: 40, width: 60, left: 100}}
            />
          </View>
        </View>
      </View>
      <Text
      numberOfLines={more ? null : 4}
        style={{
          paddingHorizontal: 20,
          opacity: 0.5,
          color: COLOURS.LightGray,
          fontSize: fontSizes.FONT13,
          textAlign: 'justify',
        }}>
        {Data.Discription}
      </Text>
      <TouchableOpacity onPress={() => setReadMore(!more)}>
          {
            more ? <Text style={styles.ReadMore}>Read Less</Text> : <Text style={styles.ReadMore}>Read More</Text> 
          }
        </TouchableOpacity>
        <View>
          <Image source={Data.reviewPic}/>
        </View>
    </View>
  );

  const renderReviewItem = ({item}) => (
    <ReviewItem
      Data={item}
    />
  );

  return (
    <View style={styles.Container}>
      <View style={styles.Headers}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.Back} style={styles.Back} />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>DETIAL PLACE</Text>
        <View style={{}}>
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
        {/* <View>
          <LikeButton 
          onPress={() => {
            if (liked) {
              like_btn.reset();
              setLiked(false);
            } else {
              like_btn.play(1, 96);
              setLiked(true);
            }
          }}
          />
        </View> */}
        
      </View>
      <Image style={styles.Picture} source={{uri:Data.Picture}} />
      <Text style={styles.Heading}>{Data.name}</Text>
      <View style={styles.locationView}>
        <Image style={styles.locationImage} source={Images.location} />
        <Text style={styles.locationText}>{Data.location}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          marginTop: moderateScale(10),
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity onPress={DetialsList}>
          <Text
            style={{
              color: colour,
              fontSize: 18,
              alignItems: 'center',
              fontFamily: 'Merienda-Bold',
            }}>
            Detail Caffe
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={CoffeeList}>
          <Text
            style={{
              color: colour1,
              fontSize: 18,
              fontFamily: 'Merienda-Bold',
            }}>
            Coffee Shop
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: '2%',
          opacity: 0.5,
        }}>
        <View
          style={{
            height: 1,
            width: '49.5%',
            borderWidth: 0.7,
            borderColor: colour,
            opacity: 0.8,
          }}></View>
        <View
          style={{
            height: 1,
            width: '49.5%',
            borderWidth: 0.7,
            borderColor: colour1,
            opacity: 0.8,
          }}></View>
      </View>
      {Focus ? (
        <ScrollView>
          <Text
            style={{
              fontSize: 17,
              color: 'black',
              marginHorizontal: moderateScale(20),
              marginTop: moderateScale(10),
              fontWeight: '500',
              fontFamily: 'Merienda-Bold',
              textDecorationLine: 'underline',
            }}>
            Description
          </Text>
          <Text
          numberOfLines={more ? null : 4}
            style={{
              marginHorizontal: moderateScale(30),
              marginTop: '1%',
              opacity: 0.7,
              textAlign: "left",
              color:COLOURS.Black
            }}>
            {Data.Discription}
          </Text>
          <TouchableOpacity onPress={() => setReadMore(!more)} >
          {
            more ? <Text style={styles.ReadMore1}>Read Less</Text> : <Text style={styles.ReadMore1}>Read More</Text> 
          }
        </TouchableOpacity>
          <Text
            style={{
              fontSize: 17,
              color: 'black',
              marginHorizontal: 20,
              fontFamily: 'Merienda-Bold',
              marginTop: '2%',
              textDecorationLine: 'underline',
            }}>
            Review
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={REVIEW}
            renderItem={renderReviewItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </ScrollView>
      ) : (
        <View style={{flex:1}}>
        <ScrollView showsVerticalScrollIndicator={false}
          style={{
            flex:1,
            width: '90%',
            alignSelf: 'center',
            paddingBottom: moderateScale(5),
          }}>

            {PRICE.map((item) => (
              <View
                key={item.id}
                style={{marginTop:moderateScale(15),marginHorizontal:moderateScale(10)}}
              >
                  {cart.includes(item) ? (
                    <TouchableOpacity
                    activeOpacity={0.1}
                    onPress={() => setCart(cart.filter((x) => x.id !== item.id))} 
                    style={{backgroundColor:COLOURS.LightGreen,padding:10,borderRadius:20,flexDirection:"row"}}>
                    <Categories
                    onPress={() => setCart(cart.filter((x) => x.id !== item.id))}
                    head={item.title}
                    subhead={"₹ "+item.Prices}
                    image={Images.Coffee}
                    />
                    <Text style={{fontSize:0}}>{item.quantity}</Text>
                    </TouchableOpacity>
                  ):(
                    <TouchableOpacity
                    activeOpacity={0.1}
                    onPress={() => setCart([...cart,item])} 
                    style={{backgroundColor:COLOURS.LightWhite,padding:10,borderRadius:20,flexDirection:"row"}}>
                    <Categories 
                    onPress={() => setCart([...cart,item])}
                    head={item.title}
                    subhead={"₹ "+item.Prices}
                    image={Images.Coffee}
                    />
                    <Text style={{fontSize:1}}>{item.quantity}</Text>
                    </TouchableOpacity>
                  )}
                  
              </View>
            ))}
          </ScrollView> 
          <View
            style={{
              paddingHorizontal: moderateScale(20),
              height: moderateScale(65),
              alignSelf:"flex-end",
              justifyContent:"center"
            }}>
            <TouchableOpacity onPress={()=> navigation.navigate("OrderIndex",{Coffees:cart})}>
              <Text
                style={{
                  backgroundColor: COLOURS.Secondary,
                  padding: moderateScale(10),
                  borderRadius: 15,
                  color: COLOURS.Primary,
                  fontSize: fontSizes.FONT18,
                  fontWeight:"500"
                }}>
                Order Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default DetialsScreenindex;

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: COLOURS.Primary,
  },
  Container: {
    flex: 1,
    backgroundColor: COLOURS.Primary,
  },
  Headers: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(20),
    justifyContent: 'space-between',
    marginTop: '3%',
    alignItems: 'center',
  },
  Back: {
    height: moderateScale(22),
    width: moderateScale(22),
  },
  HeaderText: {
    fontSize: fontSizes.FONT18,
    color: COLOURS.Secondary,
    fontFamily: 'Merienda-Bold',
  },
  Picture: {
    marginTop: '3%',
    height: moderateScale(140),
    width: '90%',
    marginHorizontal: moderateScale(20),
    backgroundColor: COLOURS.Blue,
    borderRadius: moderateScale(15),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  Heading: {
    marginTop: '1%',
    fontSize: fontSizes.FONT20,
    fontFamily: 'Merienda-Bold',
    marginHorizontal: moderateScale(20),
    color: COLOURS.Black,
  },
  locationView: {
    marginHorizontal: moderateScale(30),
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationImage: {
    height: moderateScale(15),
    width: moderateScale(15),
    opacity: 0.5,
  },
  locationText: {
    fontSize: fontSizes.FONT12,
    color: COLOURS.LightGray,
    opacity: 0.5,
    marginLeft: moderateScale(5),
  },
  explored: {
    marginTop: '2%',
    fontSize: fontSizes.FONT15,
    paddingHorizontal: moderateScale(20),
    color: COLOURS.LightGray,
  },
  DetialsList: {
    color: 'lightgreen',
    fontSize: 18,
  },
  item: {
    borderWidth: 0.5,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 15,
    marginTop: '5%',
    backgroundColor: COLOURS.LightWhite,
  },
  ReadMore:{
    color:"skyblue",
   marginHorizontal:moderateScale(20)
  },
  ReadMore1:{
    color:"skyblue",
   marginHorizontal:moderateScale(30)
  },
  DescriptionText:{
    color:COLOURS.Black,
    fontSize:moderateScale(13)
  }
});

