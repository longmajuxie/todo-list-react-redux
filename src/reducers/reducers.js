import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

/**
 *combined reducer  
 */
export default combineReducers({
  todos,
  visibilityFilter
});
