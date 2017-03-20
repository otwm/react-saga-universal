import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from 'client/common/store';
import routes from 'client/common/routes';
import './index.css';

const { store, history } = configureStore(
  null,
  window.INITIAL_STATE,
);

function Root() {
  return (
    <div>
      <Provider store={store}>
        <Router history={history} routes={routes(store.getState)} />
      </Provider>
    </div>
  );
}

function RootWithStore() {
  return (
    <Root history={history} store={store} />
  );
}

const render = () => {
  ReactDOM.render(
    <RootWithStore />,
        document.getElementById('root'),
    );
};

render(RootWithStore);
