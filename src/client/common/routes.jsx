import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from 'client/containers/home/components/Home';
import PageNotFound from 'client/molecules/PageNotFound';
import App from 'client/containers/App';
import Page from '../containers/page';
import { Rooms, RoomDetail } from 'client/containers/room/roomMain';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="rooms" component={Rooms}>
      <Route path="/room/:roomId" component={RoomDetail} />
    </Route>
    <Route path="page" component={Page} />
    <Route path="*" component={PageNotFound} />
  </Route>
);
