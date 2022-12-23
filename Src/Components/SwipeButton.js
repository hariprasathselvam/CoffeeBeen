import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SwipeButton from 'rn-swipe-button';
import { Images } from '../Assets/Images/Images';
import { moderateScale,fontSizes } from '../constants/appConstant';
import COLOURS from '../Style/Colours';
const SwipeButtons = ({onSwipeSuccess}) => {
    return (
        <View>
          <SwipeButton
          containerStyles={{borderRadius:15,}}
          disabled={false}
          swipeSuccessThreshold={20}
          height={moderateScale(40)}
        //   width={"100%"}
          title={"Swipe to pay"}
        //   onSwipeSuccess={()=>{
        //     alert("Hari")
        //   }}
        onSwipeSuccess={onSwipeSuccess}
          railFillBackgroundColor={COLOURS.Secondary}
          railBackgroundColor={COLOURS.LightGreen}
          railBorderColor={COLOURS.Primary}
          thumbIconImageSource={Images.threeArrow}
          titleFontSize={fontSizes.FONT12}
          titleColor={COLOURS.Primary}
          railStyles={{borderRadius:15,}}
          thumbIconStyles={{borderRadius:15,}}
          thumbIconBackgroundColor={COLOURS.Secondary}
          titleStyles={{color:COLOURS.LightGray,opacity:0.5}}
    
          >
          </SwipeButton>
        </View>
      )
}

export default SwipeButtons