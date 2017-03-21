import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from 'client/containers/room/roomMain';

class Rooms extends Component {
  componentDidMount() {
    if (this.props.actions) { this.props.actions.listRooms(); }
  }

  render(){
    const { rooms } = this.props;
    return (
      <div>
        <ul>
          {
            rooms
          }
        </ul>
      </div>
    )
  }

}

function Room(prop) {
  return (
    <li>{`${prop.room.name} -- ${prop.room.description}`}</li>
  );
}

export default connect(
  ({ rooms }) => ({ rooms: rooms ? rooms.toJSON() : rooms }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Rooms);