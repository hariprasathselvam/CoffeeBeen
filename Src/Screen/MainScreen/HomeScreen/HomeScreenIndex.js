import { StyleSheet, Text, View ,Image,ScrollView, TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import COLOURS from '../../../Style/Colours'
import { String } from '../../../Style/Strings'
import { fontSizes, moderateScale} from '../../../constants/appConstant'
import { Images } from '../../../Assets/Images/Images'
import HomeBox from '../../../Components/HomeBox'
import Categories from '../../../Components/Categories'
import App from '../ProfileScreen/PrivacyAndPolicy/PrivacyAndPolicyIndex'
import OptionBoz from './OptionBoz'
import Myreward from './Myreward/Myreward'
import FavoritePlace from './FavoPlace/FavoritePlace'
import PopularPlace from './PopPlace/PopularPlace'
import CoffeeScreenIndex from '../CoffeeScreen/CoffeeScreenIndex'
export default function HomeScreenIndex({navigation}) {

  return (
    <View style={styles.MainContainer}>
      <View style={styles.Container}>
        <Text style={styles.CoffeeBeen}>{String.CoffeeBeen}</Text>
      </View>
      <OptionBoz/>
      <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
        <Myreward/>
        <FavoritePlace/>
        <PopularPlace/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer:{
    flex:1,
    backgroundColor:COLOURS.Primary
  },
  Container:{
    height:"20%",
    backgroundColor:COLOURS.Secondary
  },
  CoffeeBeen:{
    color:COLOURS.Primary,
    fontSize:fontSizes.FONT22,
    padding:"8%",
    fontFamily:"Merienda-Bold",
    
  },
  ScrollView:{
    bottom:"5%"
  },
  Myreward:{
    backgroundColor:"blue",
    // height:moderateScale(150),
  },
  FavoPlace:{
    // height:moderateScale(225),
    backgroundColor:"lightgreen",
  },
})

























// import React from 'react';

// // Import React native Components
// import {
//   Text,
//   View,
//   Image,
//   StyleSheet,
//   Platform,
//   TouchableOpacity,
//   PermissionsAndroid,
// } from 'react-native';

// // Import RNFetchBlob for the file download
// import RNFetchBlob from 'rn-fetch-blob';
// import* as  RNFS from 'react-native-fs';
// const Dashboard = () => {
//   const fileUrl = 'https://www.techup.co.in/wp-content/uploads/2020/01/techup_logo_72-scaled.jpg';

//   const checkPermission = async () => {
    
//     // Function to check the platform
//     // If Platform is Android then check for permissions.

//     if (Platform.OS === 'ios') {
//       downloadFile();
//     } else {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//           {
//             title: 'Storage Permission Required',
//             message:
//               'Application needs access to your storage to download File',
//           }
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           // Start downloading
//           downloadFile();
//           console.log('Storage Permission Granted.');
//         } else {
//           // If permission denied then show alert
//           Alert.alert('Error','Storage Permission Not Granted');
//         }
//       } catch (err) {
//         // To handle permission related exception
//         console.log("++++"+err);
//       }
//     }
//   };

//   // const downloadFile = () => {
   
//   //   // Get today's date to add the time suffix in filename
//   //   let date = new Date();
//   //   // File URL which we want to download
//   //   let FILE_URL = fileUrl;    
//   //   // Function to get extention of the file url
//   //   let file_ext = getFileExtention(FILE_URL);
   
//   //   file_ext = '.' + file_ext[0];
   
//   //   // config: To get response by passing the downloading related options
//   //   // fs: Root directory path to download
//   //   const { config, fs } = RNFetchBlob;
//   //   const    AppFolder    = 'Prasath';
//   //   const DirectoryPath= RNFS.ExternalStorageDirectoryPath +'/'+ AppFolder;
//   //   RNFS.mkdir(DirectoryPath);
//   //   let RootDir = fs.dirs.DownloadDir;
//   //   // let AppFolter="AppFolter"
//   //   let options = {
//   //     fileCache: true,
//   //     addAndroidDownloads: {
//   //       path:RootDir +'/'+file_ext,
//   //       //file_ext
//   //       description: 'downloading file...',
//   //       notification: true,
//   //       // useDownloadManager works with Android only
//   //       useDownloadManager: true,   
//   //     },
//   //   };
//   //   config(options)
//   //     .fetch('GET', FILE_URL)
//   //     .then(res => {
//   //       // Alert after successful downloading
//   //       console.log('res -> ', JSON.stringify(res));
//   //       alert('File Downloaded Successfully.');
//   //     });
//   // };

//   const downloadFile = () => {
//     let file_ext ='.'+fileUrl.split('.').pop()
//     const fs = RNFetchBlob.fs;
//     const dirs = RNFetchBlob.fs.dirs;
//     const    AppFolder    = 'Prasath';
//     const customPath= RNFS.DownloadDirectoryPath +'/'+ AppFolder;
//     RNFS.mkdir(customPath);

//     RNFS.downloadFile({
//       fromUrl: fileUrl,
//       toFile: customPath+'/fileName'+file_ext,
//       begin: res => {
//         console.log('download begin res ====>' , res);
//       }
//     })
//     .promise.then((res) => {
//       console.log('file download res=========>', res)
//       alert('file downloaded successfully');
//     }).catch(err => {
//       console.log('file download error res=========>', err);
//       alert('something went wrong', err);
//     })
//   };


//   // const getFileExtention = fileUrl => {
//   //   // To get the file extension
//   //   return /[.]/.exec(fileUrl) ?
//   //            /[^.]+$/.exec(fileUrl) : undefined;
//   // };

//   return (
//     <View style={styles.container}>
//       <View style={{ alignItems: 'center' }}>
//         <Text style={{ fontSize: 25, textAlign: 'center' }}>
//           React Native File Download Example
//         </Text>
       
//       </View>
//       <Image
//         source={{
//           uri: fileUrl,
//         }}
//         style={{
//           width: '100%',
//           height: 100,
//           resizeMode: 'contain',
//           margin: 5
//         }}
//       />
//       <TouchableOpacity
//         style={styles.button}
//         onPress={checkPermission}>
//         <Text style={styles.text}>
//           Download File
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Dashboard;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 20,
//     textAlign: 'center',
//     padding: 5,
//   },
//   button: {
//     width: '80%',
//     padding: 10,
//     backgroundColor: 'blue',
//     margin: 10,
//   },
  
// });


// import React, { useState } from "react";
// import { Text, View,Button } from "react-native";
// import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";

// export default function App() {
//   const [showVideo, setShowVideo] = useState(true);
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <OrientationLocker
//         orientation={PORTRAIT}
//         onChange={orientation => console.log('onChange', orientation)}
//         onDeviceChange={orientation => console.log('onDeviceChange', orientation)}
//       />
//       <Button title="Toggle Video" onPress={() => setShowVideo(!showVideo)} />
//       {showVideo && (
//         <View>
//           <OrientationLocker orientation={LANDSCAPE} />
//           <View style={{ width: 320, height: 180, backgroundColor: '#ccc' }}>
//             <Text>Landscape video goes here</Text>
//           </View>
//         </View>
//       )}
//     </View>
//   );
// };