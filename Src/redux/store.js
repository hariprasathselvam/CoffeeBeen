import {  legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

import reducer from './reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['wishlist','CoffeeReducer',]
}

    
const rootReducer = combineReducers({
    CoffeeReducer: persistReducer(persistConfig, reducer)
})

const store = createStore(rootReducer, applyMiddleware(thunk))
const appPersist = persistStore(store)
 
export { store, appPersist}