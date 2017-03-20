import React from 'react';
import Room from '../RoomsMain';
import renderer from 'react-test-renderer';

it('room renders correctly', () => {
  const data = {
    name: 'name',
    description: 'description',
  }
  const room = renderer.create(
    <Room room={data}/>,
  ).toJSON();
  expect(room).toMatchSnapshot();
});
