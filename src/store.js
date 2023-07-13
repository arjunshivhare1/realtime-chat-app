import { createStore } from "redux";
import reducer from "./reducers/index";
import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from './persistConfig';

// Create the Redux store

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
