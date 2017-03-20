import { fork } from 'redux-saga/effects';
import { sagas } from '../../containers/room/roomMain';

export default function* root() {
  yield [
    fork(sagas.watchListRooms),
    fork(sagas.watchLoadRoom),
  ];
}
