import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import { searchRobots, requestRobots } from "./reducers"
import 'tachyons';

const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store = {store}>
		<App/>
	</Provider>
	, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
