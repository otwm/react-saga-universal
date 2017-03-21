import RoomType from './constants';

const rooms = [
  {
    id: 0,
    name: '101',
    type: RoomType.HOTEL,
    description: 'description',

  },
  {
    id: 1,
    name: '102',
    type: RoomType.HOTEL,
    description: 'description',

  },
  {
    id: 2,
    name: '103',
    type: RoomType.HOTEL,
    description: 'description',

  },
];

const api = {
  listRooms() {
    return rooms;
  },
  getRoom(id) {
    return rooms.filter(room => room.id === id);
  },
};

export default api;
