import {Image,StyleSheet,Text,TouchableOpacity,View,FlatList,Button,LayoutAnimation,UIManager,Platform,} from 'react-native';
import React, {useState, useRef} from 'react'
import COLOURS from '../../../../Style/Colours'
import {Images} from '../../../../Assets/Images/Images'
import Categories from '../../../../Components/Categories'
import {moderateScale, fontSizes} from '../../../../constants/appConstant'
import {ScrollView} from 'react-native-virtualized-view'
import BottamSheet from './BottamSheet'
// import RazorpayCheckout from 'react-native-razorpay';
export default function OrderIndex({route, navigation}) {
  const refRBSheet = useRef()
  
  const Data = route.params.Coffees;

  const [product, setProduct] = useState(Data);


  // const removeItem = (Data, index) => {
  //   let minus = finalPayment - product[index].prices;
  //   let minustotal = totalpayment - product[index].prices;
  //   let arr = product.filter(function (item) {
  //     console.log("===>"+item.id)
  //     console.log("=++++==>"+Data.id);
  //     return item.id !== Data.id;
  //   });
  //   setProduct(arr);

  //   setFinalpayment(minus);
  //   setMypayment(minus);

  //   setTotals(minustotal);
  //   setTotalpayment(minustotal);
    
  //   if (minus <= 1) {
  //     setMypayment(0);
  //   }
  //   console.log(minus);
  //   LayoutAnimation.configureNext(layoutAnimConfig);
  // };

  // const layoutAnimConfig = {
  //   duration: 300,
  //   update: {
  //     type: LayoutAnimation.Types.easeInEaseOut,
  //   },
  //   delete: {
  //     duration: 100,
  //     type: LayoutAnimation.Types.easeInEaseOut,
  //     property: LayoutAnimation.Properties.opacity,
  //   },
  // };

  // if (
  //   Platform.OS === 'android' &&
  //   UIManager.setLayoutAnimationEnabledExperimental
  // ) {
  //   UIManager.setLayoutAnimationEnabledExperimental(true);
  // }

  // const makepayment = () => {
  //   const RazorPay = totalPrice + 10 + 5 - 16
  //   var options = {
  //     description: 'Credits towards consultation',
  //     image: 'https://i.imgur.com/3g7nmJC.png',
  //     currency: 'INR',
  //     key: 'rzp_test_gg7uD5c5ZXzXXe',
  //     amount: RazorPay*100,
  //     name: 'Coffee Been',
  //     prefill: {
  //       email: 'void@razorpay.com',
  //       contact: '9191919191',
  //       name: 'Razorpay Software'
  //     },
  //     theme: {color: COLOURS.LightGreen}
  //   }
  //   RazorpayCheckout.open(options).then((data) => {
  //     alert(`Success: ${data.razorpay_payment_id}`)
  //   }).catch((error) => {
  //     alert(`Error: ${error.code} | ${error.description}`)
  //   })
  // }

  const onSubtract = (item, index) => {
    const data = [...product];
    if (product[index].quantity > 1) {
      product[index].quantity -= 1;
      setProduct(data);
    }
    console.log(item.Prices);
  };

  const onAdd = (item, index) => {
    const data = [...product];
    product[index].quantity += 1;
    setProduct(data);
  };

  let totalQuantity = 0;
  let totalPrice = 0;

  Data.forEach(item => {
    totalQuantity += item.quantity;
    totalPrice += item.quantity * item.Prices;
  });

  

  const [finalPayment, setFinalpayment] = useState(totalPrice + 10 + 5 - 16);

  // const [mypayment, setMypayment] = useState(finalPayment);

  const [totalpayment, setTotalpayment] = useState(totalPrice);
  
  // const [totals, setTotals] = useState(totalpayment);

  const Item = ({item, Subtract, Add, remove}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: moderateScale(10),
          backgroundColor: COLOURS.LightGreen,
          padding: moderateScale(10),
          width: '90%',
          alignSelf: 'center',
          borderRadius: 20,
          paddingVertical: moderateScale(15),
        }}>
        <View style={{justifyContent: 'space-between'}}>
          <Categories
            head={item.title}
            subhead={"₹ "+item.Prices}
            image={Images.Coffee}
          />
        </View>
        <View style={{}}>
          {/* <TouchableOpacity onPress={remove}>
            <Image
              source={Images.close}
              style={{
                height: 20,
                width: 20,
                alignSelf: 'flex-end',
                bottom: '40%',
              }}
            />
          </TouchableOpacity> */}

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={Subtract} style={{right: 20}}>
              <Image source={Images.minus} style={{height: 14, width: 14}} />
            </TouchableOpacity>
            <Text style={{fontSize: 16, right: 9}}>{item.quantity}</Text>
            <TouchableOpacity onPress={Add} style={{}}>
              <Image source={Images.plus} style={{height: 14, width: 14}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.Back} style={styles.GoBack} />
        </TouchableOpacity>

        <Text style={styles.HeadersText}>ORDER</Text>
        <TouchableOpacity>
          <Image source={Images.menu} style={styles.Menu} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.AddressBox}>
          <Image source={Images.country} style={styles.location} />
          <View style={styles.ShippingAddress}>
            <Text style={styles.AddressText}>Shipping Address</Text>
            <Text
              style={{fontSize: 17, fontWeight: '500', color: COLOURS.Black}}>
              Near Bus Stand
            </Text>
          </View>
        </View>
        <View style={styles.Horizline}></View>

        <View style={styles.ShoplistView}>
          <Text style={styles.ShoppinglistText}>Shopping list</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.Addmore}>+Addmore</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Horizline}></View>

        <View style={{}}>
          <FlatList
            data={product}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => (
              <Item
                item={item}
                Subtract={() => onSubtract(item, index)}
                Add={() => onAdd(item, index)}
                // remove={() => removeItem(item, index)}
              />
            )}
          />
        </View>
        <View style={styles.Horizline}></View>
        <View style={styles.PaymentDetails}>
          <Text style={styles.PaymentDetailsText}>Payment Details</Text>
          <View style={styles.Horizline}></View>
          <View style={styles.PaymentCard}>
            <Text style={styles.PaymentsName}>Total Price</Text>
            <Text style={styles.Amounts}>INR{finalPayment}.00</Text>
          </View>
          <View style={styles.PaymentCard}>
            <Text style={styles.PaymentsName}>Delivery Fee</Text>
            <Text style={styles.Amounts}>INR10.000</Text>
          </View>
          <View style={styles.PaymentCard}>
            <Text style={styles.PaymentsName}>Packaging Fee</Text>
            <Text style={styles.Amounts}>INR5.000</Text>
          </View>
          <View style={styles.PaymentCard}>
            <Text style={styles.PaymentsName}>Promo Discount</Text>
            <Text style={styles.Amounts}>-INR16.000</Text>
          </View>
          <View style={styles.Horizline}></View>
          <View style={styles.PaymentCard}>
            <Text style={styles.PaymentsName}>Total Payment</Text>
            <Text style={styles.TotalAmounts}>INR{totalPrice}.00</Text>
          </View>
          <View style={styles.Horizline1}></View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.OrderButton}
        onPress={() => refRBSheet.current.open()}>
        <Text style={styles.OrderText}>ORDER NOW</Text>
      </TouchableOpacity>
      <BottamSheet
        refRBSheet={refRBSheet}
        finalPayment={totalPrice}
        onSwipeSuccess={()=>alert("make Payment")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: COLOURS.Primary,
  },
  Header: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(20),
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  GoBack: {
    height: moderateScale(20),
    width: moderateScale(20),
    tintColor: COLOURS.Secondary,
  },
  HeadersText: {
    fontSize: fontSizes.FONT18,
    fontFamily: 'Merienda-Bold',
    color: COLOURS.Secondary,
    fontWeight: '600',
  },
  Menu: {
    height: moderateScale(20),
    width: moderateScale(20),
    tintColor: COLOURS.Secondary,
  },
  AddressBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: moderateScale(20),
    marginTop: '10%',
  },
  location: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
  ShippingAddress: {
    marginLeft: '5%',
  },
  AddressText: {
    fontSize: fontSizes.FONT12,
    opacity: 0.5,
    color: COLOURS.LightGray,
  },
  Horizline: {
    height: 1,
    borderWidth: 0.1,
    backgroundColor: COLOURS.LightGray,
    opacity: 0.1,
    marginTop: '5%',
  },
  ShoplistView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(20),
    marginTop: '5%',
    alignItems: 'center',
  },
  ShoppinglistText: {
    fontSize: fontSizes.FONT16,
    color: COLOURS.Black,
    fontWeight: '500',
  },
  Addmore: {
    fontSize: fontSizes.FONT12,
    color: COLOURS.Secondary,
  },
  PaymentDetails: {
    paddingHorizontal: moderateScale(20),
  },
  PaymentDetailsText: {
    marginTop: '5%',
    fontSize: fontSizes.FONT18,
    fontWeight: '500',
    color: COLOURS.Black,
  },
  PaymentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: moderateScale(10),
    marginTop: '5%',
  },
  PaymentsName: {
    fontSize: fontSizes.FONT13,
    color: COLOURS.LightGray,
    opacity: 0.5,
  },
  Amounts: {
    fontSize: fontSizes.FONT15,
    color: COLOURS.Black,
  },
  TotalAmounts: {
    fontSize: fontSizes.FONT16,
    color: COLOURS.Black,
    fontWeight: '500',
  },
  OrderButton: {
    marginHorizontal: moderateScale(20),
    padding: moderateScale(10),
    backgroundColor: COLOURS.Secondary,
    borderRadius: 15,
    alignItems: 'center',
    bottom: '2%',
  },
  OrderText: {
    fontSize: fontSizes.FONT18,
    fontWeight: '600',
    color: COLOURS.Primary,
  },
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
});
