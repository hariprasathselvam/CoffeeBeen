import { Image, StyleSheet, Text, View,FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React,{useEffect} from 'react'
import { Images } from '../../../../Assets/Images/Images'
import CoffeeShop from '../../../../Assets/StaticData/CoffeeShopsData';
import { useNavigation, useRoute } from "@react-navigation/native";


import { connect } from 'react-redux'
import { fetchMovies, addToWishList, removeFromWishlist } from '../../../../redux/actions'


const  Pop_PlaceBox = (props) => {

  const navigation =useNavigation()

  
  const { movieReducer, fetchMovies, addToWishList, removeFromWishlist } = props

  const { movies, wishlist } = movieReducer

  useEffect(() => {
    fetchMovies()
  }, []);


  const Item = ({Data,}) => (
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('DetialsScreenindex', Data)} style={{}}>
    <View style={{flexDirection:"row"}}>
          <Image style={{height:150,width:125,borderRadius:25}} source={{uri:Data.Picture}}/>
      
      <View style={{marginLeft:15,marginTop:15}}>
        <Text style={{fontSize:22,color:"black"}}>{Data.name}</Text>
        <View style={{flexDirection:"row",top:'5%'}}>
          <Image source={Images.rating} style={{height:30,width:80}}/>
          <Text style={{fontSize:19,left:"50%",color:"gray"}}>{Data.Rating}</Text>
        </View>
        <Text style={{top:"15%",fontSize:18,color:"gray"}}>{Data.location}</Text>
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
      <FlatList
          data={movies.slice(0,1)} 
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>

  </View>

  )
}


const mapStateToProps = (state) => ({
  movieReducer: state.movieReducer
})

export default connect(mapStateToProps, { fetchMovies, addToWishList, removeFromWishlist })(Pop_PlaceBox)

const styles = StyleSheet.create({})