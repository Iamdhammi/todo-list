import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from "../reducers/index.reducer";
import AsyncStorage from '@react-native-community/async-storage'

const initialState = {};

const middleware = [thunk];

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
);

export default store;
