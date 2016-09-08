import {combineReducers} from 'redux';
import selectColor from './selectColorReducer';
import selectedColors from './handleColors';
import DarkerAndLighter from './DarkerAndLighter';

const rootReducer = combineReducers({
  selectColor,
  DarkerAndLighter,
  selectedColors
});



export default rootReducer;
