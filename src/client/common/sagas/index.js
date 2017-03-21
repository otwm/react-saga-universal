import { fork } from 'redux-saga/effects';
import * as sagas from '/client/containers/room/core/sagas';

export default function* root() {
  console.log('test');
  yield [
    fork(sagas.watchListRooms),
    fork(sagas.watchLoadRoom),
  ];
}
