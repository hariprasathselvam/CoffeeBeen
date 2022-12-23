import React, {useContext, useState, useEffect} from 'react';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import SplashScreen from '../Screen/SplashScreen/SplashScreen';

import AuthStack from './Stacks/AuthStack';
import AppStack from './Stacks/AppStack';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [loding , setLoading ] = useState(false)
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) 
  return ( null
  )


  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
