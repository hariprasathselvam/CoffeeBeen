import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottamNavigationTap from "../BottamNavigationTap/BottamNavigationTap";
import ProfileScreenIndex from "../../Screen/MainScreen/ProfileScreen/ProfileScreeIndex";
import ProfileAccountIndex from "../../Screen/MainScreen/ProfileScreen/ProfileAccount/ProfileAccountIndex";
import PrivacyAndPolicyIndex from "../../Screen/MainScreen/ProfileScreen/PrivacyAndPolicy/PrivacyAndPolicyIndex";
import OptionBoz from "../../Screen/MainScreen/HomeScreen/OptionBoz";
import DeleteTheAccount from "../../Screen/MainScreen/ProfileScreen/ProfileAccount/DeleteTheAccount";
import EditProfileAccount from "../../Screen/MainScreen/ProfileScreen/EditProfileAccount";
import HistoryIndex from "../../Screen/MainScreen/HomeScreen/History/HistoryIndex";
import PayIndex from "../../Screen/MainScreen/HomeScreen/Pay/PayIndex";
import TopUpIndex from "../../Screen/MainScreen/HomeScreen/TopUp/TopUpIndex";
import PromoIndex from "../../Screen/MainScreen/HomeScreen/Promo/PromoIndex";
import ViewAllPopPlace from "../../Screen/MainScreen/HomeScreen/PopPlace/ViewAllPopPlace";
import ViewAllMyreward from "../../Screen/MainScreen/HomeScreen/Myreward/ViewAllMyreward";
import ViewAllFavoPlace from "../../Screen/MainScreen/HomeScreen/FavoPlace/ViewAllFavoPlace";
import DetialsScreenindex from "../../Screen/MainScreen/HomeScreen/DetialsScreens/DetialsScreenindex";
import PaymentIndex from "../../Screen/MainScreen/ProfileScreen/Payment/PaymentIndex";
import PaymentCardDetials from "../../Screen/MainScreen/ProfileScreen/Payment/PaymentCardDetials";
import OrderIndex from "../../Screen/MainScreen/HomeScreen/Order/OrderIndex";
const stacks=createNativeStackNavigator();
export default function AppStack() {
  return (
      <stacks.Navigator screenOptions={{headerShown:false}}>
        <stacks.Screen name="BottamNavigationTap" component={BottamNavigationTap} />
        <stacks.Screen name="ProfileScreenIndex" component={ProfileScreenIndex} />
        <stacks.Screen name="ProfileAccountIndex" component={ProfileAccountIndex} />
        <stacks.Screen name="PrivacyAndPolicyIndex" component={PrivacyAndPolicyIndex} />
        <stacks.Screen name="OptionBoz" component={OptionBoz} />
        <stacks.Screen name="DeleteTheAccount" component={DeleteTheAccount} />
        <stacks.Screen name="EditProfileAccount" component={EditProfileAccount} />
        <stacks.Screen name="TopUpIndex" component={TopUpIndex} />
        <stacks.Screen name="PromoIndex" component={PromoIndex} />
        <stacks.Screen name="HistoryIndex" component={HistoryIndex} />
        <stacks.Screen name="PayIndex" component={PayIndex} />
        <stacks.Screen name="ViewAllPopPlace" component={ViewAllPopPlace} />
        <stacks.Screen name="ViewAllMyreward" component={ViewAllMyreward} />
        <stacks.Screen name="ViewAllFavoPlace" component={ViewAllFavoPlace} />
        <stacks.Screen name="DetialsScreenindex" component={DetialsScreenindex} />
        <stacks.Screen name="PaymentIndex" component={PaymentIndex} />
        <stacks.Screen name="PaymentCardDetials" component={PaymentCardDetials} />
        <stacks.Screen name="OrderIndex" component={OrderIndex} />
      </stacks.Navigator>
  )
}