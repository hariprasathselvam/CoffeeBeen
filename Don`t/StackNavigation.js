// import { NavigationContainer, StackActions } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import SplashScreen from "../Src/Screen/SplashScreen/SplashScreen";
// import OnBoardingScreen1 from "../Src/Screen/SplashScreen/OnBoardingScreen1";
// import OnBoardingScreen2 from "../Src/Screen/SplashScreen/OnBoardingScreen2";
// import OnBoardingScreen3 from "../Src/Screen/SplashScreen/OnBoardingScreen3";
// import LoginScreen from "../Src/Screen/LoginScreen/LoginScreen";
// import CreateNewAccount from "../Src/Screen/LoginScreen/CreateNewAccount";
// import OTP_Verification from "../Src/Screen/LoginScreen/OTP_Verification";
// import DoneCreateAccount from '../Src/Screen/LoginScreen/DoneCreateAccount'
// import ForgetPassWord from "../Src/Screen/LoginScreen/ForgetPassWord";
// import CreateNewPassWord from "../Src/Screen/LoginScreen/CreateNewPassWord";
// import BottamNavigationTap from "../Src/Navigation/BottamNavigationTap/BottamNavigationTap";
// import ProfileScreenIndex from "../Src/Screen/MainScreen/ProfileScreen/ProfileScreeIndex";
// import ProfileAccountIndex from "../Src/Screen/MainScreen/ProfileScreen/ProfileAccount/ProfileAccountIndex";
// import PrivacyAndPolicyIndex from "../Src/Screen/MainScreen/ProfileScreen/PrivacyAndPolicy/PrivacyAndPolicyIndex";
// import DownloadProfile from "../Src/Screen/MainScreen/ProfileScreen/DownloadProfile";
// import OptionBoz from "../Src/Screen/MainScreen/HomeScreen/OptionBoz";
// import UploadFileFireBase from "../Src/Screen/MainScreen/ProfileScreen/UploadFileFireBase";
// const stacks=createNativeStackNavigator();

// export default function StackNavigation() {
//   return (
//     <NavigationContainer >
//       <stacks.Navigator screenOptions={{headerShown:false}}>
//         <stacks.Screen name="SplashScreen" component={SplashScreen} />
//         <stacks.Screen name="OnBoardingScreen1" component={OnBoardingScreen1} />
//         <stacks.Screen name="OnBoardingScreen2" component={OnBoardingScreen2} />
//         <stacks.Screen name="OnBoardingScreen3" component={OnBoardingScreen3} />
//         <stacks.Screen name="LoginScreen" component={LoginScreen} />
//         <stacks.Screen name="CreateAccount" component={CreateNewAccount} />
//         <stacks.Screen name="OTP_Verification" component={OTP_Verification} />
//         <stacks.Screen name="DoneSetup" component={DoneCreateAccount} />
//         <stacks.Screen name="ForgetPassword" component={ForgetPassWord} />
//         <stacks.Screen name="CreateNewPassWord" component={CreateNewPassWord} />
//         <stacks.Screen name="BottamNavigationTap" component={BottamNavigationTap} />
//         <stacks.Screen name="ProfileScreenIndex" component={ProfileScreenIndex} />
//         <stacks.Screen name="ProfileAccountIndex" component={ProfileAccountIndex} />
//         <stacks.Screen name="PrivacyAndPolicyIndex" component={PrivacyAndPolicyIndex} />
//         <stacks.Screen name="OptionBoz" component={OptionBoz} />
//         <stacks.Screen name="DownloadProfile" component={DownloadProfile} />
//         <stacks.Screen name="UploadFileFireBase" component={UploadFileFireBase} />
        
//       </stacks.Navigator>
//     </NavigationContainer>
//   )
// }