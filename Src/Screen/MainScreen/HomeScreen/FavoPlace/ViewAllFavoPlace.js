import {Image,StyleSheet,Text,View,FlatList,TouchableOpacity,} from 'react-native';
import React,{useEffect,useState} from 'react';
import { Images } from '../../../../Assets/Images/Images';
import CoffeeShop from '../../../../Assets/StaticData/CoffeeShopsData';
import { moderateScale, fontSizes} from '../../../../constants/appConstant';
import { String } from '../../../../Style/Strings';
import COLOURS from '../../../../Style/Colours';
import { useNavigation } from '@react-navigation/native';

import { connect } from 'react-redux'
import { fetchMovies, addToWishList, removeFromWishlist } from '../../../../redux/actions'
import LikeButton from '../../../../Components/LikeButton';

const ViewAllFavoPlace = (props) => {

  const navigation = useNavigation()

  const [liked, setLiked] = useState(false)

  const { movieReducer, fetchMovies, addToWishList, removeFromWishlist } = props;

  const { movies, wishlist } = movieReducer;


  const onTapAddToWishlist = (movie) => {

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

useEffect(() => {
  fetchMovies()
}, []);

// const Add = (Data) => {
//   like_btn.play(1, 96)
//   onTapAddToWishlist(Data)
  
// }

// const Remove = (Data) => {
//   like_btn.reset()
//   onTapRemoveFromWishlist(Data)
// }

  const Item = ({Data}) => (
    <View style={{flex: 1, marginBottom: '5%'}}>
      <TouchableOpacity>
        {/* onPress={() => navigation.navigate('DetialsScreenindex', Data)} */}
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
            source={Data.Picture}
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
              {/* <View style={{height:25,width:35,backgroundColor:COLOURS.LightGray,alignItems:"center",borderRadius:10,justifyContent:"center"}}>
                <Text style={{color:COLOURS.Primary,}}>{Data.price}</Text>
            </View> */}
              <View>
                {isExist(Data) ? (
                  <TouchableOpacity
                    onPress={() => 
                      onTapRemoveFromWishlist(Data)
                    }>
                    <Text>Remove</Text>
                  </TouchableOpacity>
                ) : (
                  // onPress={() => onTapRemoveFromWishlist(Data)}
                  <TouchableOpacity
                    // onPress={() => onTapAddToWishlist(Data)}
                    onPress={() => 
                      onTapAddToWishlist(Data)
                    }
                  >
                  <Text>Add</Text>
                  </TouchableOpacity>
                )}

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
      <View style={{flex: 1, width: '90%', alignSelf: 'center',marginTop:"5%"}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={CoffeeShop}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  movieReducer: state.movieReducer
})

export default connect(mapStateToProps, { fetchMovies, addToWishList, removeFromWishlist })(ViewAllFavoPlace)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.Primary,
  },
});
