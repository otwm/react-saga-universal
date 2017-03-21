import React, { PropTypes } from 'react';

function Room(prop) {
  return (
    <li>{`${prop.room.name} -- ${prop.room.description}`}</li>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Room;
