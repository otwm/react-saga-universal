import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';
import { actions } from 'client/containers/room/roomMain';
import Room from './Room';

@connect(
  ({ rooms }) => ({ rooms: rooms.toJSON ? rooms.toJSON() : rooms }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)
class Rooms extends Component {
  componentDidMount() {
    if (this.props.actions) { this.props.actions.listRooms(); }
  }

  render() {
    const { rooms } = this.props;

    return (
      <div>
        <ul>
          {
            rooms.map(room => <Room room={room} key={room.id} />)
          }
        </ul>
      </div>
    );
  }
}

Rooms.propTypes = {
  rooms: PropTypes.instanceOf(List).isRequired,
  actions: PropTypes.shape({
    listRooms: PropTypes.func,
  }),
};

Rooms.defaultProps = {
  rooms: new List(),
  actions: null,
};

export default Rooms;
