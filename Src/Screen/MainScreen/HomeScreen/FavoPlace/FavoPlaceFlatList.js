import { StyleSheet, Text, View,FlatList,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import CoffeeShop from '../../../../Assets/StaticData/CoffeeShopsData'
import { fontSizes, moderateScale} from '../../../../constants/appConstant'
import { Images } from '../../../../Assets/Images/Images'
import COLOURS from '../../../../Style/Colours'
import { useNavigation } from '@react-navigation/native'

export default function FavoPlaceFlatList() {

  const navigation =useNavigation();

  const Item = ({Data}) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => navigation.navigate('DetialsScreenindex', Data)}>
        <Image source={Data.Picture}  style={styles.ImageBackground}/>
        <View style={styles.Text1View}>
          <Text style={styles.Text1}>{Data.name}</Text>
          <View style={styles.Text2View}>
              <Image source={Images.location} style={{height:18,width:18,tintColor:COLOURS.Primary}}/>
            <Text style={styles.Text2}>{Data.location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

    const renderItem = ({ item }) => (
        <Item Data={item} />
      );

  return (
    <View style={styles.container}>
      <FlatList
       showsHorizontalScrollIndicator={false}
        horizontal
        data={CoffeeShop.slice(0,4)} 
        renderItem={renderItem}
        keyExtractor={item => item.id}
        initialNumToRender={1}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:moderateScale(20),
        margin:"5%"
      },
      item: {
      },
      ImageBackground:{
        height:moderateScale(200),
        width:moderateScale(170),
        borderRadius:25,
        marginRight:moderateScale(20)
      },
      Text1View:{
        bottom:"25%",
        padding:moderateScale(10)
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
      }
})