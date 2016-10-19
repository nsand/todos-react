import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './model/reducers';

import App from './containers/App';
import Adder from './containers/Adder';

const store = createStore(app);

render(
	<Provider store={store}>
		<div>
			<Adder></Adder>
			<App></App>
		</div>
	</Provider>,
	document.getElementById('root')
)
