import { StyleSheet, Text, View,FlatList,Image ,TouchableOpacity,ImageBackground} from 'react-native'
import React,{useEffect,useState} from 'react'
import CoffeeShop from '../../../../Assets/StaticData/CoffeeShopsData'
import { fontSizes, moderateScale} from '../../../../constants/appConstant'
import { Images } from '../../../../Assets/Images/Images'
import COLOURS from '../../../../Style/Colours'
import { useNavigation } from '@react-navigation/native'
import Lottie from 'lottie-react-native';

import { connect, useSelector } from 'react-redux'

const FavoPlaceFlatList = (props) => {

  const navigation =useNavigation();

    
  const {wishlist,Coffees} = useSelector((state) => state.CoffeeReducer)

  const [letyet,setLetyet]=useState(false)

  let arr = wishlist
  let len = arr.length

  console.log(len)

  useEffect(()=>{
      if (len==0){
        setLetyet(false)
      }
      else{
        setLetyet(true)
      }
  })



  const Item = ({Data}) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetialsScreenindex', Data)}>
        <ImageBackground
          source={{uri: Data.Picture}}
          resizeMode="cover"
          imageStyle={{borderRadius:25}}
          style={styles.ImageBackground}>
          <View style={styles.Text1View}>
            <Text style={styles.Text1}>{Data.name}</Text>
            <View style={styles.Text2View}>
              <Image
                source={Images.location}
                style={{height: 18, width: 18, tintColor: COLOURS.Primary}}
              />
              <Text style={styles.Text2}>{Data.location}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );

    const renderItem = ({ item }) => (
        <Item Data={item} />
      );

  return (
    <View style={styles.container}>
      {letyet ? (
        <View
          style={{marginTop: '5%'}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={wishlist.slice(0, 4)}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View
          style={{
          }}>
          <Lottie
            source={require('../../../../Assets/Animation/empty-box.json')}
            style={styles.Like}
            autoPlay={true}
          />
        </View>
      )}
    </View>
  );
}


export default FavoPlaceFlatList

const styles = StyleSheet.create({
    container: {
        margin:"5%"
      },
      item: {
      },
      ImageBackground:{
        height:moderateScale(200),
        width:moderateScale(170),
        marginRight:moderateScale(15)
      },
      Text1View:{
        padding:moderateScale(10),
        marginTop:"80%"
      },
      Text1:{
        fontSize:fontSizes.FONT18,
        color:COLOURS.Primary,
        fontWeight:"bold"
      },
      Text2View:{
        flexDirection:"row",
        top:"2%",

      },
      Text2:{
        fontSize:fontSizes.FONT12,
        color:COLOURS.Primary,
        left:"50%",
      },
      Like: {
        height: moderateScale(200),
        alignSelf:"center"
      },
})


        {/* <Image source={{uri:Data.Picture}}  style={styles.ImageBackground}/>
        <View style={styles.Text1View}>
          <Text style={styles.Text1}>{Data.name}</Text>
          <View style={styles.Text2View}>
              <Image source={Images.location} style={{height:18,width:18,tintColor:COLOURS.Primary}}/>
            <Text style={styles.Text2}>{Data.location}</Text>
          </View>
        </View> */}