import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from '/client/containers/home/core/reducer'


export default combineReducers({
  todos,
  routing: routerReducer
});
