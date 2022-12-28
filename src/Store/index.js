import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

import { persistStore, persistReducer } from 'redux-persist'
import commomReducer from './common';


const rootReducers = combineReducers({
    common: commomReducer,
});


const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['common'], //Things u want to persist
    // blacklist: ['extra','staff','userPermission']
}


const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

let persistor = persistStore(store);

export default store;

export {
    persistor,
};