import { Image, StyleSheet, Text, View ,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import Categories from '../../../../Components/Categories'
import COLOURS from '../../../../Style/Colours'
import {moderateScale,fontSizes} from '../../../../constants/appConstant'
import { Images } from '../../../../Assets/Images/Images'
import { String } from '../../../../Style/Strings'
export default function ProfileAccountIndex({navigation}) {
  return (
    <View style={styles.main}>
        <View style={styles.Container}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
               <Image source={Images.Back} style={styles.Back}/>
            </TouchableOpacity>
            <Text style={styles.Text}>{String.Account}</Text>
            <TouchableOpacity>
               <Image source={Images.more} style={styles.More}/>
            </TouchableOpacity>
        </View>
        <ScrollView style={styles.ScrollView}>

            <View style={styles.Categories}>

                <Categories
                image={Images.privacy}
                head={String.Privacy}
                subhead={String.PrivacySub}
                />

            </View>

            <View style={styles.Categories}>

                <Categories
                image={Images.security}
                head={String.Security}
                subhead={String.SecuritySub}
                />

            </View>

            <View style={styles.Categories}>

                <Categories
                image={Images.verification}
                head={String.Twostep}
                subhead={String.TwostepSub}
                />

            </View>

            <View style={styles.Categories}>

                <Categories
                image={Images.request}
                head={String.Request}
                subhead={String.RequestSub}
                />

            </View>

            <View style={styles.Categories1}>

                <Categories
                image={Images.trash}
                head={String.Delete}
                subhead={String.DeleteSub}
                onPress={()=>navigation.navigate("DeleteTheAccount")}
                />

            </View>

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1
    },
    Container:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:"5%",
        paddingHorizontal:moderateScale(20)
    },
    Back:{
        height:moderateScale(22),
        width:moderateScale(22),
    },
    Text:{
        fontSize:fontSizes.FONT17,
        fontFamily:"Merienda-Regular",
    },
    More:{
        height:moderateScale(20),
        width:moderateScale(35)
    },
    ScrollView:{
        marginTop:"10%",
        
    },
    Categories:{
        marginTop:"5%",
        paddingHorizontal:moderateScale(20)
    },
    Categories1:{
        marginTop:"5%",
        paddingHorizontal:moderateScale(20),
        paddingBottom:"20%"
    }
})