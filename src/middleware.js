import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '/client/common/reducers';
import routes from './client/common/routes';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import configureStore from './client/common/store';
import { ReduxAsyncConnect, loadOnServer } from 'redux-connect';

const renderHTML = (markup, store) => {
  let result;
  const initialState = (
    <script
      dangerouslySetInnerHTML={{ __html: `window.INITIAL_STATE=${JSON.stringify(store.getState())};` }}
      charSet="UTF-8"
    />
  );
  if (process.env.NODE_ENV == 'development') {
    result = `
					<!doctype html>
					<html>
						<header>
							<title>My Universal App</title>
						</header>
						<body>
							<div id='app'></div>
							<script src='bundle.js'></script>
						</body>
					</html>
				`;
  } else if (process.env.NODE_ENV == 'production') {
    result = `
					<!doctype html>
					<html>
						<header>
							<title>My Universal App</title>
							<link rel='stylesheet' href='bundle.css'>
						</header>
						<body>
							<div id='app'>${markup}</div>
							${initialState}
              <script src='bundle.js'></script>
						</body>
					</html>
				`;
  }

  return result;
};

export default (req, res) => {
  const location = req.url;
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const { store, history } = configureStore(memoryHistory);

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const asyncRenderData = Object.assign({}, renderProps, { store });

      loadOnServer(asyncRenderData).then(() => {
        const markup = renderToString(
          <Provider store={store} key="provider">
            <ReduxAsyncConnect {...renderProps} />
          </Provider>,
        );
        res.status(200).send(renderHTML(markup, store));
      })
        .catch(asyncRouterError => console.log(asyncRouterError));

      // if (process.env.NODE_ENV == 'development') {
      //   res.status(200).send(`
				// 	<!doctype html>
				// 	<html>
				// 		<header>
				// 			<title>My Universal App</title>
				// 		</header>
				// 		<body>
				// 			<div id='app'></div>
				// 			<script src='bundle.js'></script>
				// 		</body>
				// 	</html>
				// `);
      // } else if (process.env.NODE_ENV == 'production') {
      //   res.status(200).send(`
				// 	<!doctype html>
				// 	<html>
				// 		<header>
				// 			<title>My Universal App</title>
				// 			<link rel='stylesheet' href='bundle.css'>
				// 		</header>
				// 		<body>
				// 			<div id='app'>${renderToString(
      //     <Provider store={createStore(reducers)}>
      //       <RouterContext {...renderProps} />
      //     </Provider>
      //   )}</div>
				// 			<script src='bundle.js'></script>
				// 		</body>
				// 	</html>
				// `);
      // }
    } else {
      res.status(404).send('Not found');
    }
  });
};
