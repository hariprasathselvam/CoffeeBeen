// import { StyleSheet, Text, View,Modal,TouchableOpacity ,PermissionsAndroid,Image} from 'react-native'
// import React, { useState } from 'react'
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import { String } from '../Style/Strings';
// import { fontSizes,moderateScale} from '../constants/appConstant';
// import { Images } from '../Assets/Images/Images';
// import COLOURS from '../Style/Colours';
// export default function Models({hideModel,navigation,plant}) {

//     const [cameraPhoto,setCameraPhoto]=useState()
//     const [galaryPhoto,setGalaryPhoto]=useState()
//     const plant=cameraPhoto
    
//   let options={
//     saveToPhotos:true,
//     mediaType:'photo'
//   }
 
//   const openCamera = async () => {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.CAMERA,
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           const result =await launchCamera(options)
//           try{
//             setCameraPhoto(result.assets[0].uri)
//           }
//           catch{
//             alert("You Have Not Take A Photo");
//           }      
          
//         }
//   };

//   const openGalary = async () =>{
//     const result  = await launchImageLibrary(options)
//     try{
//       setGalaryPhoto(result.assets[0].uri)
//     }
//     catch{
//       alert("You Have Not Choose A Photo");
//     }
    
//   }
  

//   return (
//     <View>
//         <Modal
//         animationType="slide"
//         transparent={false}
//         visible={true}>
//         <TouchableOpacity style={styles.centeredView} onPress={() => navigation.navigate('ProfileScreenIndex', {plant
            
//         })}>

//             <View style={styles.Container}>
//           <TouchableOpacity onPress={() =>hideModel() }>
//             <Image source={Images.close} style={styles.close}/>
//           </TouchableOpacity>

//             <TouchableOpacity style={styles.Modals} onPress={openCamera}
//             >
//               <Text style={styles.textStyle}>{String.OpenCamera}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.Modals} 
//               onPress={openGalary}
//             >
//               <Text style={styles.textStyle}>{String.OpenGalary}</Text>
//             </TouchableOpacity>
//             </View>
//             </TouchableOpacity>
//       </Modal>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     centeredView:{
//         height:"100%",
//         width:"100%",
//         justifyContent:"center",
//         alignItems:"center"
//       },
//       Container:{
//         backgroundColor:COLOURS.LightGreen,
//         padding:moderateScale(25),
//         paddingHorizontal:moderateScale(50),
//         borderRadius:25

//       },
//       Modals:{
//         backgroundColor:COLOURS.Primary,
//         height:moderateScale(40),
//         marginTop:"2%",
//         alignItems:"center",
//         borderRadius:15,
//         padding:moderateScale(10),
//       },
//       close:{
//         height:moderateScale(25),
//         width:moderateScale(25),
//         alignSelf:"flex-end",
//         marginTop:"3%"
//       }
// })

// () => setModalVisible(!modalVisible)
//onPress={() =>hideModel() } 

      {/* {modalVisible ? <Models hideModel={()=>setModalVisible(false)}
      /> : null} */}


              {/* <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible} >

        <View style={styles.centeredView}>
          <TouchableOpacity style={styles.MainTouch} onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.View}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={ styles.buttonClose}>
                <Image source={Images.close} style={styles.close}/>
              </TouchableOpacity>
                <TouchableOpacity style={styles.Modals} onPress={openCamera}
                >
                  <Text style={styles.textStyle}>{String.OpenCamera}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.Modals} 
                  onPress={openGalary}
                >
                  <Text style={styles.textStyle}>{String.OpenGalary}</Text>
                </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </Modal> */}

        {/* {downloadVisible ? <DownloadProfile hideModel={(props)=>setdownloadVisible(false)} />:null} */}