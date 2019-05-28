import { combineReducers } from 'redux';
import number from './number';
import title from './title';

const reducers = combineReducers({
  number, title
});

export default reducers;
