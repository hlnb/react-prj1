import React from 'react';
import Layout from './layouts';
import { Router, Route, browserHistory } from 'react-router';

const Routes = (
	<Router history={browserHistory}>
		<Route handler={Layout} path="/" />
	</Router>
);

module.exports = Routes;
