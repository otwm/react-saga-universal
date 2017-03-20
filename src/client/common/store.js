import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore(history, initialState) {
  const historyTemp = history || browserHistory;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(historyTemp),
      ),
    ),
  );

  const historyResult = syncHistoryWithStore(historyTemp, store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      /* eslint-disable global-require */
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.runSaga = sagaMiddleware.run(rootSaga);
  return { store, history: historyResult };
}
