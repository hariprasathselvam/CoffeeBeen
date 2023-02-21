import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet ,Text,Image} from 'react-native';
import { Images } from '../../Assets/Images/Images';
import HomeScreenIndex from '../../Screen/MainScreen/HomeScreen/HomeScreenIndex';
import CoffeeScreenIndex from '../../Screen/MainScreen/CoffeeScreen/CoffeeScreenIndex';
import VocherScreeIndex from '../../Screen/MainScreen/VocherScreen/VocherScreeIndex';
import ProfileScreenIndex from '../../Screen/MainScreen/ProfileScreen/ProfileScreeIndex';
import {fontSizes,moderateScale} from '../../constants/appConstant'
import COLOURS from '../../Style/Colours';

const Tab = createBottomTabNavigator();



const BottamNavigationTap = () => {
    return(
        <Tab.Navigator
        screenOptions={{headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle: {
                position: 'absolute',
                padding:5,
                height:"8%"
              },

        
        }}
        >
            <Tab.Screen name='Home' component={HomeScreenIndex}  initialParams={{index:1}} 
            options={{
                tabBarIcon:({
                    focused,
                    color,
                    size,
                })=> <Image source={Images.home}
                style={{ tintColor:focused?COLOURS.Secondary:COLOURS.Black,height:moderateScale(25), width:moderateScale(25) ,}}
                />
            }}  />
            <Tab.Screen name='coffee' component={CoffeeScreenIndex} initialParams={{index:2}}
            options={{
                tabBarIcon:({
                    focused,
                    color,
                    size
                })=> <Image source={Images.coffeeCup}
                style={{ tintColor:focused?COLOURS.Secondary:COLOURS.Black,height:moderateScale(35), width:moderateScale(35) ,}}
                />
            }} />
            <Tab.Screen name='voucher' component={VocherScreeIndex} initialParams={{index:3}}
            options={{
                tabBarIcon:(
                    {
                        focused,
                        color,
                        size
                    }
                )=> <Image source={Images.voucher}
                style={{ tintColor:focused?COLOURS.Secondary:COLOURS.Black,height:moderateScale(25), width:moderateScale(25) ,}}
                />
            }} />
            <Tab.Screen name='user' component={ProfileScreenIndex} initialParams={{index:4}}
            options={{
                tabBarIcon:(
                    {
                        focused,
                        color,
                        size
                    }
                )=> <Image source={Images.user}
                style={{ tintColor:focused?COLOURS.Secondary:COLOURS.Black,height:moderateScale(25), width:moderateScale(25) ,}}
                />
            }} />
        </Tab.Navigator>
        
    )
}

export default BottamNavigationTap;

