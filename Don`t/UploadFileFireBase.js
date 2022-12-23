// import { StyleSheet, Text, View,Alert, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import storage from '@react-native-firebase/storage';
// import firestore from '@react-native-firebase/firestore';


// const UploadFileFireBase = ({route,navigation}) => {

//   const [profileDowload,setprofileDowload]=useState("")

//    const Download = () => {
//     navigation.navigate("DownloadProfile",{paramKey:profileDowload})
// }


//     const Links ="https://firebasestorage.googleapis.com/v0/b/coffee-been.appspot.com/o/photos%2Frn_image_picker_lib_temp_d6d73eb0-e646-4d24-9457-c119a15db5791667568609285.jpg?alt=media&token=03272ab6-6b3d-4e9b-9657-738281c987c0"
//     const image = route.params.paramKey;
//     const [uploading, setUploading] = useState(false);
//     const [transferred, setTransferred] = useState(0);
//     const [post, setPost] = useState(null);
//     const submitPost = async () => {
//         console.log('Image Url -- 1--: ', image);
//         console.log('Post -- 2 --: ', post);
//         const imageUrl = await uploadImage();
//         setprofileDowload(imageUrl)
//         console.log('Image Urls -- 3 --: ', imageUrl);
//         console.log('Post -- 4 --: ', post);

//         firestore()
//         .collection('posts')
//         .set({
//           postImg: imageUrl,
//         })
//         .then(() => {
//           console.log('Post Added! -- 5 --');
//           Alert.alert(
//             'Post published!',
//             'Your post has been published Successfully!',
//           );
//           setPost(null);
//         })
//         .catch((error) => {
//           console.log('Something went wrong with added post to firestore.', error);
//         });
//       }
    
//       const uploadImage = async () => {
//         if( image == null ) {
//           return null;
//         }
//         const uploadUri = image;
//         let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    
//         // Add timestamp to File Name
//         const extension = filename.split('.').pop(); 
//         const name = filename.split('.').slice(0, -1).join('.');
//         filename = name + Date.now() + '.' + extension;
    
//         setUploading(true);
//         setTransferred(0);
    
//         const storageRef = storage().ref(`photos/${filename}`);
//         const task = storageRef.putFile(uploadUri);
    
//         // Set transferred state
//         task.on('state_changed', (taskSnapshot) => {
//           console.log(
//             `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
//           );
    
//           setTransferred(
//             Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
//               100,
//           );
//         });
    
//         try {
//           await task;
    
//           const url = await storageRef.getDownloadURL();
    
//           setUploading(false);
//         //   setImage(null);
//           return url;
    
//         } catch (e) {
//           console.log(e);
//           return null;
//         }
    
//       };

//   return (
//     <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
//         <TouchableOpacity style={{backgroundColor:"lightgreen",padding:10}} onPress={submitPost}>
//             <Text>Post</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={{backgroundColor:"skyblue",padding:10,margin:10}} onPress={Download}>
//             <Text>Download</Text>
//         </TouchableOpacity>
        
//     </View>
//   )
// }

// export default UploadFileFireBase

// const styles = StyleSheet.create({})