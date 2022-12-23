import {Image,StyleSheet,Text,TouchableOpacity,View,FlatList,} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';
import COLOURS from '../../../../Style/Colours';
import {moderateScale, fontSizes} from '../../../../constants/appConstant';
import {Images} from '../../../../Assets/Images/Images';
import CoffeeShop from '../../../../Assets/StaticData/CoffeeShopsData';
import Categories from '../../../../Components/Categories';
import {ScrollView} from 'react-native-virtualized-view';
import LikeButton from '../../../../Components/LikeButton';

import { connect } from 'react-redux'
import { fetchMovies, addToWishList, removeFromWishlist } from '../.././../../redux/actions'
import { BASE_URL } from '../../../../utilities/index';


const DetialsScreenindex = ({navigation, route}) => {

    // const { movieReducer, fetchMovies, addToWishList, removeFromWishlist } = props;

    // const { movies, wishlist } = movieReducer;

    // const [currentMovie, setCurrentMovie] = useState(undefined);


    // useEffect(() => {
    //     fetchMovies()
    // }, []);

    // useEffect(() => {

    //     if(movies.length > 0){
    //         setCurrentMovie(movies[0])
    //     }

    // }, [movies])
 


    const didTapCurrentMovie = (movie) => {
        setCurrentMovie(movie)
    }

    const onTapAddToWishlist = (movie) => {

        addToWishList(movie)
    }

    const onTapRemoveFromWishlist = (movie) => {
        removeFromWishlist(movie)

    }

        const isExist = (movie) => {
        
        if(wishlist.filter(item => item._id === movie._id).length > 0){
            return true
        }

        return false
    }

  const Data = route.params

  const PRICE = Data.CoffeeAndPrice

  const REVIEW = Data.Review

  // const animation = React.useRef(null);
  // const isFirstRun = React.useRef(true);





  // console.log(PRICE);

  // React.useEffect(() => {
  //   if (isFirstRun.current) {
  //     if (isLiked) {
  //       animation.current.play(66, 66);
  //     } else {
  //       animation.current.play(19, 19);
  //     }
  //     isFirstRun.current = false;
  //   } else if (isLiked) {
  //     animation.current.play(19, 50);
  //   } else {
  //     animation.current.play(0, 19);
  //   }
  // }, [isLiked]);

  const [Focus, setFocus] = useState(true);
  const [colour, setColour] = useState(COLOURS.Secondary);
  const [colour1, setColour1] = useState(COLOURS.LightGray);

  const [cart,setCart] = useState([]);

  const DetialsList = () => {
    setFocus(true);
    setColour1(COLOURS.LightGray);
    setColour(COLOURS.Secondary);
  };
  const CoffeeList = () => {
    setFocus(false);
    setColour1(COLOURS.Secondary);
    setColour(COLOURS.LightGray);
  };



  // const [selected, setSelected] = React.useState(new Map());

  // const onSelect = React.useCallback(
  //   id => {
  //     const newSelected = new Map(selected);
  //     newSelected.set(id, !selected.get(id));

  //     setSelected(newSelected);
  //   },
  //   [selected],
  // );

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
  const [more, setReadMore] = useState(false);

  const [liked, setLiked] = useState(false)

  const ReviewItem = ({Data}) => (
    <View style={{paddingHorizontal: 20, marginTop: '5%'}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            source={Data.userprofile}
            style={{height: 50, width: 50, borderRadius: 50}}
          />
        </View>

        <View style={{left: '10%'}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text>{Data.username}</Text>
            <Text style={{left: 125}}>{Data.date}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text >Soft Suave</Text>
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
    </View>
  );

  // const renderItem = ({item}) => <Item Data={item} />;

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
        <View>
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
        </View>
        
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
              textAlign: 'justify',
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
                style={{margin:10}}
              >
                  {cart.includes(item) ? (
                    <TouchableOpacity
                    activeOpacity={0.1}
                    onPress={() => setCart(cart.filter((x) => x.id !== item.id))} 
                    style={{backgroundColor:COLOURS.LightGreen,padding:10,borderRadius:20,flexDirection:"row"}}>
                    <Categories
                    onPress={() => setCart(cart.filter((x) => x.id !== item.id))}
                    head={item.title}
                    subhead={item.prices}
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
                    subhead={item.prices}
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
              height: 60,
              alignSelf:"flex-end",
              justifyContent:"center"
            }}>
            <TouchableOpacity onPress={()=> navigation.navigate("OrderIndex",{Coffees:cart})}>
              <Text
                style={{
                  backgroundColor: COLOURS.Secondary,
                  padding: 10,
                  borderRadius: 15,
                  color: COLOURS.Primary,
                  fontSize: 18,
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
  }
});

