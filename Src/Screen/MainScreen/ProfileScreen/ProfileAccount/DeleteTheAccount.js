// import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
// import React,{useContext} from 'react'
// import { AuthContext } from '../../../../Navigation/AuthProvider'
// const DeleteTheAccount = () => {

//     const {user,logout} =useContext(AuthContext)

//   return (
//     <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
//       <Text style={{fontSize:18,color:"red"}}>{user.fname}</Text>
//       <TouchableOpacity onPress={() => logout()} style={{padding:10,backgroundColor:"skyblue",margin:20,borderRadius:10}}>
//         <Text>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default DeleteTheAccount

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View ,Image} from 'react-native'
import React,{useContext} from 'react'
import COLOURS from '../../../../Style/Colours'
import { moderateScale,fontSizes } from '../../../../constants/appConstant'
import Buttons from '../../../../Components/Buttons'
import { Images } from '../../../../Assets/Images/Images'

import { AuthContext } from '../../../../Navigation/AuthProvider'

const DeleteTheAccount = () => {

  const {logout} =useContext(AuthContext)
  return (
    <View style={styles.Maincontainer}>
      <View style={styles.Container}>
        <View style={styles.Minicontainer}>
          <Image source={Images.man} style={styles.Image} />
          <Text style={styles.Text}>Hari Prasath</Text>
          <Text style={styles.City}>Chennai</Text>
        </View>
        <View style={styles.Buttons}>
          <Buttons onpress={() => logout()} text={'Logout'} />
        </View>
      </View>
    </View>
  );
}

export default DeleteTheAccount

const styles = StyleSheet.create({
  Maincontainer:{
    flex:1,
    backgroundColor:COLOURS.Primary
  },
  Container:{
    backgroundColor:COLOURS.Primary,
    flex:1
  },
  Minicontainer:{
    flex:1,
  },
  Image:{
    marginTop:"20%",
    alignSelf:"center",
    height:moderateScale(150),
    width:moderateScale(150),
    borderRadius:120,
  },
  Text: {
    fontSize: fontSizes.FONT24,
    color: COLOURS.Secondary,
    fontFamily: 'Merienda-Bold',
    alignSelf: 'center',
    marginTop:"5%"
  },
  City:{
    alignSelf:"center",
    opacity:0.5,
    fontSize:fontSizes.FONT15
  },
  Buttons:{
    marginBottom:"10%"
  }
})