import { StyleSheet, Text, View,Image, TouchableOpacity ,ScrollView} from 'react-native'
import React, { useState } from 'react'
import COLOURS from '../../../../Style/Colours'
import { fontSizes, moderateScale, } from '../../../../constants/appConstant'
import TextBox from '../../../../Components/TextBox'
import { Images } from '../../../../Assets/Images/Images'
export default function NewCardDetials({navigation}) {
    const[cardnumber,setCardNumber]=useState("")
    const[date,setDate]=useState("")
    const[CVV,setCVV]=useState("")
    const [userName, setUserName] = useState('');
  return (
    <View style={{flex:1,backgroundColor:COLOURS.LightGreen}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{height:22,width:22,margin:10}}>
        <Image source={Images.Back} style={{height:22,width:22,margin:10}}/>
        </TouchableOpacity>
        
      <View style={{marginTop:"35%",backgroundColor:COLOURS.Primary,flex:1,borderTopStartRadius:50,borderTopEndRadius:50}}>
        <View style={{height:200,width:300,backgroundColor:COLOURS.Blue,alignSelf:"center",borderRadius:20,bottom:"15%"}}>
        </View>
        <ScrollView style={{bottom:"10%"}}>
        <View >
        <TextBox TextName={"Card Number"}
        value={cardnumber}
        onChangeText={(cardnumber) =>setCardNumber(cardnumber)}
        keyboardType={'number-pad'}
        />
        </View>
        <View style={{top:"3%",justifyContent:"space-between",flexDirection:'row',marginHorizontal:20,alignItems:"center"}}>
        <View style={{}}>
            <TextBox TextName={"Expiry Date"}
                    value={date}
                    onChangeText={(date) => setDate(date)}
                    keyboardType={'number-pad'}
            />
        </View>
        <View style={{}}>
            <TextBox TextName={"CVV"}
                value={CVV}
                onChangeText={(CVV) => setCVV(CVV)}
                keyboardType={'number-pad'}
            />
        </View>
        </View>
        <View style={{top:"3%"}}>
            <TextBox TextName={"Name"}
                            value={userName}
                            onChangeText={(username) => setUserName(username)}
            />
        </View>

        <TouchableOpacity style={{marginTop:"20%",backgroundColor:COLOURS.Secondary,padding:moderateScale(10),alignItems:"center",alignSelf:"center",width:"50%",borderRadius:15}}
        onPress={() => navigation.navigate("PaymentCardDetials",{name: userName,cardnumber:cardnumber,date:date,CVV:CVV})}
        >
            <Text style={{color:COLOURS.Primary,fontSize:fontSizes.FONT18,fontWeight:"500",}}>ADD CARD</Text>
        </TouchableOpacity>
        </ScrollView>
        
      </View>
    </View>
  )
}

