import * as React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Filter from './components/Filter';
import Grid from './components/Grid';
import BrandedText from './components/BrandedText';

export default () => (
  <React.Fragment>
    <Header />
    <Filter />
    <div className="subHeader">
      <BrandedText type="h2">All Restaurants</BrandedText>
    </div>
    <Grid />
  </React.Fragment>
);
