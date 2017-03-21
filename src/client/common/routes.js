import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '/client/containers/home/components/Home'
import Page from '../containers/page';

export default (
	<Route path='/'>
		<IndexRoute component={Home} />
		<Route path='page' component={Page} />
	</Route>
);
