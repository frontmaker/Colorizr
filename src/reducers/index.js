import {combineReducers} from 'redux';
import selectColor from './selectColorReducer';
import selectedColors from './setColorsReducer';

const rootReducer = combineReducers({
  selectColor,
  selectedColors
});


export default rootReducer;
