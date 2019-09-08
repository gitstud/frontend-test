import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/App';
import store from './src/store';
import "./src/sass/main.scss"

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("max")
);
