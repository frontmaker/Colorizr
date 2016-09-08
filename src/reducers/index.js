import {combineReducers} from 'redux';
import selectColor from './selectColorReducer';
import selectedColors from './handleColors';

const rootReducer = combineReducers({
  selectColor,
  selectedColors
});


export default rootReducer;
