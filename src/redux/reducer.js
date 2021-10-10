import {combineReducers} from 'redux';
import {systemReducer} from './system/reducer';
//Reducer'larımızı burada rootReducer altında toplarız
export const rootReducer = combineReducers({
  system: systemReducer,
});
