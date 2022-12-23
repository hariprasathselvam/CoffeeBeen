import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Lottie from 'lottie-react-native';
import { moderateScale } from '../constants/appConstant';
export default function LikeButton({onPress}) {
    return (
      <View>
        <TouchableOpacity
          onPress={onPress}>
          <Lottie
            source={require('../Assets/Animation/Like.json')}
            style={styles.Like}
            ref={animation => {
              like_btn = animation;
            }}
            loop={false}
          />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    Like: {
        height: moderateScale(40),
        width: moderateScale(25),
        left:"5%"
      },
})

// onPress={() => {
//   if (liked) {
//     like_btn.reset();
//     setLiked(false);
//   } else {
//     like_btn.play(1, 96);
//     setLiked(true);
//   }
// }}