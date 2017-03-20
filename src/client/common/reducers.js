import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { rooms, roomDetail } from 'client/containers/room/roomMain';
import { reducer as reduxAsyncConnect } from 'redux-connect';

const rootReducers = combineReducers({
  routing,
  rooms,
  roomDetail,
  reduxAsyncConnect,
});

export default rootReducers;
