import { List } from 'immutable';
import * as actions from './action-types';
import Room from './Room';

const listReducer = (state = new List(), { payload, type }) => {
  switch (type) {
    case actions.LIST_ROOMS_SUCCESS:
      return new List(payload);
    default:
      return state;
  }
};

const detailReducer = (state = new Room(), { payload, type }) => {
  switch (type) {
    case actions.LOAD_ROOM_SUCCESS:
      return new Room(payload);
    default:
      return state;
  }
};

export { listReducer, detailReducer };
