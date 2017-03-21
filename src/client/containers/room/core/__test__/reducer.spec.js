import { listRoomsSuccess, loadRoomSuccess } from '../actions';

describe('room reducer test', () => {
  test('listRoomsSuccess', () => {
    const rooms = [
            { name: 'room a' },
            { name: 'room b' },
    ];
    expect(listRoomsSuccess(rooms).payload).toEqual(rooms);
  });

  test('loadRoomSuccess', () => {
    const room = {
      name: 'room A',
      type: 'motel',
    };
    expect(loadRoomSuccess(room).payload).toEqual(room);
  });
});
