import RoomDetail from './components/RoomDetail';
import Rooms from './components/Rooms/RoomsMain';
import { listReducer, detailReducer } from './core/reducer';
import * as actions from './core/actions';
import Room from './components/Rooms/Room';
import * as sagas from './core/sagas';

export {
    Rooms,
    RoomDetail,
    Room,
    listReducer as rooms,
    detailReducer as roomDetail,
    actions,
    sagas,
};
