import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '/client/containers/home/components/Home'
import PageNotFound from 'client/molecules/PageNotFound';
import App from 'client/containers/App';
import Page from '../containers/page';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path='page' component={Page} />
		<Route path="*" component={PageNotFound} />
	</Route>
);
