import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {persistReducer} from 'redux-persist';
import {rootReducer} from './reducer';
import {applyMiddleware, compose} from 'redux';

const middleware = [promise, thunk];

const persistConfig = {
  key: 'project',
  storage: AsyncStorage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  pReducer,
  undefined,
  compose(applyMiddleware(...middleware)),
);

export default store;
