import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from '/client/containers/home/core/reducer'
import { rooms } from 'client/containers/room/roomMain';

export default combineReducers({
  todos,
  rooms,
  routing: routerReducer
});
