import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React,{useEffect,useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import OnBoardingScreen from "../../Screen/SplashScreen/OnBoardingScreen";
import LoginScreen from "../../Screen/LoginScreen/LoginScreen";
import CreateNewAccount from "../../Screen/LoginScreen/CreateNewAccount";
import OTP_Verification from "../../Screen/LoginScreen/OTP_Verification";
import DoneCreateAccount from "../../Screen/LoginScreen/DoneCreateAccount";
import ForgetPassWord from "../../Screen/LoginScreen/ForgetPassWord";
import CreateNewPassWord from "../../Screen/LoginScreen/CreateNewPassWord";
import SplashScreen from "../../Screen/SplashScreen/SplashScreen";

const Stack=createNativeStackNavigator();

const AuthStack = () => {

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  //     webClientId: '647851065237-e7lln7mp7v7oh6uhkmocqkr5avnca5n8.apps.googleusercontent.com',
     
  // })
  
  // }, []);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true')
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); 
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: '647851065237-e7lln7mp7v7oh6uhkmocqkr5avnca5n8.apps.googleusercontent.com',
     
  })
  
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'OnBoardingScreen';
  } else {
    routeName = 'SplashScreen';
  }

  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={routeName}>
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateNewAccount} />
      <Stack.Screen name="OTP_Verification" component={OTP_Verification} />
      <Stack.Screen name="DoneSetup" component={DoneCreateAccount} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassWord} />
      <Stack.Screen name="CreateNewPassWord" component={CreateNewPassWord} />
    </Stack.Navigator>
  )
}

export default AuthStack
