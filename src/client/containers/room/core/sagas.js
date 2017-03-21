import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './action-types';
import api from './api';

export function* listRooms() {
  try {
    const rooms = yield call(api.listRooms);
    yield put(actions.listRoomsSuccess(rooms));
  } catch (error) {
    yield put(actions.listRoomsFail(error));
  }
}

export function* watchListRooms() {
  yield takeLatest(actionTypes.LIST_ROOMS, listRooms);
}

export function* loadRoom(id) {
  try {
    const room = yield call(api.getRoom, id);
    yield put(actions.loadRoomSuccess(room));
  } catch (error) {
    yield put(actions.loadRoomFail(error));
  }
}

export function* watchLoadRoom() {
  yield takeLatest(actionTypes.LOAD_ROOM, loadRoom);
}
