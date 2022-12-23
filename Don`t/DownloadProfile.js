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
// // import RNFetchBlob from 'rn-fetch-blob';
// import* as  RNFS from 'react-native-fs';
// const DownloadProfile = ({route}) => {
//   const fileUrl = route.params.paramKey;

//   console.log("======+++++++"+ fileUrl);

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
//            {route.params.paramKey}
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

// export default DownloadProfile;

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

// // import React from 'react';

// // // Import Required Components
// // import {
// //   StyleSheet,
// //   Text,
// //   View,
// //   TouchableOpacity,
// //   PermissionsAndroid,
// //   Image,
// //   Platform,
// // } from 'react-native';

// // // Import RNFetchBlob for the file download
// // import RNFetchBlob from 'rn-fetch-blob';

// // const DownloadProfile = ({route}) => {
// //   const REMOTE_IMAGE_PATH = route.params.paramKey
// //   const checkPermission = async () => {
    
// //     // Function to check the platform
// //     // If iOS then start downloading
// //     // If Android then ask for permission

// //     if (Platform.OS === 'ios') {
// //       downloadImage();
// //     } else {
// //       try {
// //         const granted = await PermissionsAndroid.request(
// //           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
// //           {
// //             title: 'Storage Permission Required',
// //             message:
// //               'App needs access to your storage to download Photos',
// //           }
// //         );
// //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
// //           // Once user grant the permission start downloading
// //           console.log('Storage Permission Granted.');
// //           downloadImage();
// //         } else {
// //           // If permission denied then show alert
// //           alert('Storage Permission Not Granted');
// //         }
// //       } catch (err) {
// //         // To handle permission related exception
// //         console.warn(err);
// //       }
// //     }
// //   };

// //   const downloadImage = () => {
// //     // Main function to download the image
    
// //     // To add the time suffix in filename
// //     let date = new Date();
// //     // Image URL which we want to download
// //     let image_URL = REMOTE_IMAGE_PATH;    
// //     // Getting the extention of the file
// //     let ext = getExtention(image_URL);
// //     ext = '.' + ext[0];
// //     // Get config and fs from RNFetchBlob
// //     // config: To pass the downloading related options
// //     // fs: Directory path where we want our image to download
// //     const { config, fs } = RNFetchBlob;
// //     let PictureDir = fs.dirs.PictureDir;
// //     let options = {
// //       fileCache: true,
// //       addAndroidDownloads: {
// //         // Related to the Android only
// //         useDownloadManager: true,
// //         notification: true,
// //         path:
// //           PictureDir +
// //           '/image_' + 
// //           Math.floor(date.getTime() + date.getSeconds() / 2) +
// //           ext,
// //         description: 'Image',
// //       },
// //     };
// //     config(options)
// //       .fetch('GET', image_URL)
// //       .then(res => {
// //         // Showing alert after successful downloading
// //         console.log('res -> ', JSON.stringify(res));
// //         alert('Image Downloaded Successfully.');
// //       });
// //   };

// //   const getExtention = filename => {
// //     // To get the file extension
// //     return /[.]/.exec(filename) ?
// //              /[^.]+$/.exec(filename) : undefined;
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={{ alignItems: 'center' }}>
// //         <Text style={{ fontSize: 20, textAlign: 'center' }}>
// //            Image Download 
// //         </Text>
// //       </View>
// //       <Image
// //         source={{
// //           uri: REMOTE_IMAGE_PATH,
// //         }}
// //         style={{
// //           width: '100%',
// //           height: 100,
// //           resizeMode: 'contain',
// //           margin: 5
// //         }}
// //       />
// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={checkPermission}>
// //         <Text style={styles.text}>
// //           Download Image
// //         </Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // export default DownloadProfile;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //    // justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //     paddingTop:30
// //   },
// //   button: {
// //     width: '70%',
// //     padding: 10,
// //     backgroundColor: '#00BFFF',
// //     margin: 10,
// //     height:50
// //   },
// //   text: {
// //     color: '#fff',
// //     fontSize: 20,
// //     textAlign: 'center',
// //     padding: 5,
// //   },
// // });