import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configurestore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
</Provider>, document.getElementById('root'));

