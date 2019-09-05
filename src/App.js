import * as React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Filter from './components/Filter';

export default () => (
    <React.Fragment>
        <Header />
        <Filter />
    </React.Fragment>
);
