import * as actions from './action-types';

export const listRooms = () => ({
  type: actions.LIST_ROOMS,
});

export const listRoomsSuccess = payload => ({
  type: actions.LIST_ROOMS_SUCCESS,
  payload,
});

export const listRoomsFail = error => ({
  type: actions.LIST_ROOMS_FAIL,
  payload: error,
});

export const loadRoom = id => ({
  type: actions.LOAD_ROOM,
  id,
});

export const loadRoomSuccess = payload => ({
  type: actions.LOAD_ROOM_SUCCESS,
  payload,
});

export const loadRoomFail = error => ({
  type: actions.LOAD_ROOM_FAIL,
  payload: error,
});
