
import React, { useState ,useEffect} from 'react';
import { Button, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function PrivacyAndPolicyIndex() {

  function onAuthStateChanged(user) {
    console.log(user,"user");
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    console.log("Click");
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+916369448526')}
        />
      </View>
      
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}