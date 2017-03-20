import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from 'client/containers/App';
import PageNotFound from 'client/molecules/PageNotFound';
// import { Rooms, RoomDetail } from 'client/containers/room/roomMain';

function routes() {
  return (
    <Route path="/" component={App}>
      <Route path="*" component={PageNotFound} />
    </Route>
  );
}

export default routes;
