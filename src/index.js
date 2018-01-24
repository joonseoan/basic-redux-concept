import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import App from './components/appPra';
import counterApp from './reducers/indexPra';

const store = createStore(counterApp);
const appElement = document.querySelector('.container');



ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    appElement
);