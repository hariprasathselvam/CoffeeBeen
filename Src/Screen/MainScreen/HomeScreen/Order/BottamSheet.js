import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { moderateScale,fontSizes } from '../../../../constants/appConstant';
import { Images } from '../../../../Assets/Images/Images';
import COLOURS from '../../../../Style/Colours';
import RBSheet from 'react-native-raw-bottom-sheet';

import SwipeButtons from '../../../../Components/SwipeButton';
export default function BottamSheet({refRBSheet,finalPayment,onSwipeSuccess}) {
  return (
    <View>
        <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType={'slide'}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
          },
          draggableIcon: {
            backgroundColor: COLOURS.Secondary,
          },
          container: {
            paddingHorizontal: moderateScale(20),
            marginTop: '5%',
            backgroundColor: COLOURS.LightWhite,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            height: moderateScale(240),
          },
        }}>
        <View style={styles.BottamSheet}>
          <Categories
            head={'Coffess'}
            subhead={'Porur,Chennai'}
            image={Images.Coffee}
          />
          <Text>INR{finalPayment}.00</Text>
        </View>
        <View style={styles.Horizline}></View>
        <TouchableOpacity style={styles.PaymentMethod}>
          <Text style={styles.MethodName}>Coffee Pay</Text>
          <View style={styles.Changepaymentmethod}>
            <Text style={styles.ChangepaymentmethodText}>
              Change payment method
            </Text>
            <Image style={styles.right} source={Images.right} />
          </View>
        </TouchableOpacity>
        <View style={styles.Horizline}></View>
        <View style={styles.SwipeToPay}>
          <SwipeButtons
            onSwipeSuccess={onSwipeSuccess}
          />
        </View>
      </RBSheet>
    </View>
  )
}

const styles = StyleSheet.create({
    BottamSheet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      PaymentMethod: {
        marginTop: moderateScale(10),
      },
      Changepaymentmethod: {
        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      MethodName: {
        color: COLOURS.Black,
        fontSize: fontSizes.FONT15,
        fontWeight: '600',
      },
      ChangepaymentmethodText: {
        fontSize: fontSizes.FONT10,
        color: COLOURS.LightGray,
        opacity: 0.5,
      },
      right: {
        height: moderateScale(12),
        width: moderateScale(12),
      },
      SwipeToPay: {
        marginTop: moderateScale(10),
        borderRadius: 15,
      },
      Horizline1: {
        height: moderateScale(30),
        borderTopWidth: 0.5,
        borderTopColor: COLOURS.LightGray,
        paddingBottom: moderateScale(25),
        opacity: 0.3,
        marginTop: '6%',
      },
      Horizline: {
        height: 1,
        borderWidth: 0.1,
        backgroundColor: COLOURS.LightGray,
        opacity: 0.1,
        marginTop: '5%',
      },
})