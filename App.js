import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store,appPersist } from './Src/redux/store'
import Providers from './Src/Navigation'
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={appPersist}>
        <Providers />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({})