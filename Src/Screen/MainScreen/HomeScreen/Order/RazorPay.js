import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import RazorpayCheckout from 'react-native-razorpay';

const RazorPay = () => {
        var options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_gg7uD5c5ZXzXXe',
          amount: '100',
          name: 'foo',
          prefill: {
            email: 'void@razorpay.com',
            contact: '9191919191',
            name: 'Razorpay Software'
          },
          theme: {color: '#F37254'}
        }
        RazorpayCheckout.open(options).then((data) => {
          alert(`Success: ${data.razorpay_payment_id}`)
        }).catch((error) => {
          alert(`Error: ${error.code} | ${error.description}`)
        })
      }

export default RazorPay

const styles = StyleSheet.create({})