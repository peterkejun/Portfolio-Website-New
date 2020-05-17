import React from 'react';
import './App.css';
import Home from './Home/Home.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
