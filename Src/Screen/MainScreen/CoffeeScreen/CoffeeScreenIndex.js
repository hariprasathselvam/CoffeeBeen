
import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image} from 'react-native'
import React,{useState,useEffect} from 'react'
import COLOURS from '../../../Style/Colours'
import { moderateScale,fontSizes} from '../../../constants/appConstant'
import SearchBar from "react-native-dynamic-search-bar"
import { Images } from '../../../Assets/Images/Images'
import { useNavigation } from '@react-navigation/native';

import { connect, useSelector } from 'react-redux'
import { fetchCoffee, addToWishList, removeFromWishlist } from '../../../redux/actions'

const CoffeeScreenIndex = props => {
  const {addToWishList, removeFromWishlist} = props;
  const {Coffees, wishlist} = useSelector(state => state.CoffeeReducer);

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(Coffees);
  const [masterDataSource, setMasterDataSource] = useState([Coffees]);

  useEffect(() => {
    setFilteredDataSource(Coffees);
    setMasterDataSource(Coffees);
  }, []);

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const navigation = useNavigation();

  const onTapAddToWishlist = movie => {
    addToWishList(movie);
  };

  const onTapRemoveFromWishlist = movie => {
    removeFromWishlist(movie);
  };

  const isExist = movie => {
    if (wishlist.filter(item => item.id === movie.id).length > 0) {
      return true;
    }

    return false;
  };

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
                  <Image
                    source={Images.heartfill}
                    style={{
                      height: moderateScale(20),
                      width: moderateScale(20),
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => onTapAddToWishlist(Data)}>
                  <Image
                    source={Images.heart}
                    style={{
                      height: moderateScale(20),
                      width: moderateScale(20),
                    }}
                  />
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
  );

  const renderItem = ({item}) => <Item Data={item} />;

  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Text style={styles.HeadText1}>Find Your Best Cafe</Text>
        <Text style={styles.HeadText2}>
          Enjoy the love of the best coffee taste
        </Text>
      </View>
      <View>
        <SearchBar
          style={styles.Searchbar}
          fontSize={14}
          placeholder="Search Caffee"
          textInputStyle={styles.TextInput}
          searchIconImageStyle={styles.SearchIcon}
          searchIconImageSource={Images.search}
          clearIconImageSource={Images.clear}
          clearIconImageStyle={styles.SearchIcon}
          onChangeText={text => searchFilterFunction(text)}
          value={search}
        />
      </View>
      <View
        style={{
          flex: 1,
          width: '90%',
          marginHorizontal: moderateScale(20),
          paddingBottom: moderateScale(70),
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredDataSource}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  CoffeeReducer: state.CoffeeReducer,
});

export default connect(mapStateToProps, {
  fetchCoffee,
  addToWishList,
  removeFromWishlist,
})(CoffeeScreenIndex);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLOURS.Primary,
  },
  Header: {
    marginHorizontal: moderateScale(20),
    marginTop: '5%',
  },
  HeadText1: {
    color: COLOURS.Secondary,
    fontSize: fontSizes.FONT20,
    fontFamily: 'Merienda-Bold',
  },
  HeadText2: {
    color: COLOURS.LightGray,
    fontSize: fontSizes.FONT12,
    opacity: 0.5,
  },
  Searchbar: {
    marginTop: '5%',
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    borderRadius: 10,
    height: moderateScale(45),
  },
  SearchIcon: {
    height: moderateScale(22),
    width: moderateScale(22),
  },
  TextInput: {
    fontSize: fontSizes.FONT16,
    color: COLOURS.LightGray,
    opacity: 0.5,
    fontFamily: 'Merienda-Bold',
  },
});
