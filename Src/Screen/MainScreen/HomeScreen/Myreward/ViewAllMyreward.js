
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Images } from '../../../../Assets/Images/Images';
import CoffeeShop from '../../../../Assets/StaticData/CoffeeShopsData';
import { moderateScale, fontSizes} from '../../../../constants/appConstant';
import { String } from '../../../../Style/Strings';
import COLOURS from '../../../../Style/Colours';
import Categories from '../../../../Components/Categories';

export default function ViewAllMyreward({navigation}) {


  const Item = ({Data,}) => (
    <View style={{padding: moderateScale(5), borderRadius: 20,}}>
      <TouchableOpacity onPress={() => navigation.navigate('DetialsScreenindex', Data)}>
      <View style={{borderWidth:0.5,borderRadius:15,flexDirection:"row",padding:15,marginTop:"5%",backgroundColor:COLOURS.LightWhite}}>
                <Categories
                head={Data.MyrewardHead}
                subhead={"Buy 10 Coffee and get 1 coffee for free"}
                image={Images.Coffee}  />
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
          Myreward
        </Text>
      </View>
      <View style={{flex: 1, width: '90%', alignSelf: 'center',paddingBottom:moderateScale(5)}}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.Primary,
  },
});
