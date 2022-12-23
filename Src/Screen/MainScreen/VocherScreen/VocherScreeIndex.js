import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image, ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { moderateScale,fontSizes} from '../../../constants/appConstant'
import COLOURS from '../../../Style/Colours'
import { Images } from '../../../Assets/Images/Images'
import { useNavigation } from '@react-navigation/native'
import Categories from '../../../Components/Categories'
import Vo_Mi_Box from './Vo_Mi_Box'
import Rectangular_Box from './Rectangular_Box'
const VocherScreeIndex = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Text style={styles.HeadText1}>Attractive gift for you</Text>
        <Text style={styles.HeadText2}>
          Carry out the missions and enjoy the rewards
        </Text>
      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.ProgressReward}>
          <Image source={Images.BestPrice} style={styles.RewardPic} />
          <View style={styles.ProgressView}>
            <Text style={styles.ProgresText}>350 XP more to get rewards</Text>
            <Image source={Images.Bar} style={styles.HorizBar} />
          </View>
          <Image source={Images.right} style={styles.RightArrow} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: moderateScale(20),
            justifyContent: 'space-between',
            marginTop: '5%',
          }}>
          <Rectangular_Box
            expire={'5 Will expire'}
            heading={'Vouchers'}
            Bar={Images.Bar}
            cound={'11'}
          />
          <Rectangular_Box
            expire={'3 in progress'}
            heading={'Missions'}
            Bar={Images.Bar}
            cound={'17'}
          />
        </View>

        <Vo_Mi_Box
          head={'25% discount for all menu'}
          subhead={'25% discount for all menus during'}
          image={Images.cafe}
          expire={'End in 1 Day'}
          Heading={'Voucher for you'}
        />

        <Vo_Mi_Box
          head={'Buy 10 Coffee'}
          subhead={'Buy 10 Coffee and get 1 coffee for free'}
          image={Images.cafe}
          expire={'End in 1 Day'}
          Heading={'Mission for you'}
          available={'8/10'}
        />
        <View style={styles.padding}></View>
      </ScrollView>
    </View>
  );
}

export default VocherScreeIndex

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
        fontSize: fontSizes.FONT22,
        fontFamily: 'Merienda-Bold',
      },
      HeadText2: {
        color: COLOURS.LightGray,
        fontSize: fontSizes.FONT12,
        opacity: 0.5,
      },
      ProgressReward:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:moderateScale(20),
        marginTop:"10%",
        padding:moderateScale(15),
        backgroundColor:COLOURS.LightWhite,
        borderRadius:15,
        alignItems:"center"
      },
      RewardPic:{
        height:moderateScale(50),
        width:moderateScale(50)
      },
      HorizBar:{
        width:moderateScale(200),
        height:moderateScale(20)
      },
      RightArrow:{
        height:moderateScale(12),
        width:moderateScale(12)
      },
      ProgressView:{
        alignItems:"center"
      },
      ProgresText:{
        fontSize:fontSizes.FONT15
      },
      padding:{
        height:moderateScale(80)
      }
})