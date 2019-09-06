import * as React from 'react';
import { connect } from "react-redux";
import { Provider } from 'react-redux';
import Header from './components/Header';
import Filter from './components/Filter';
import Grid from './components/Grid';
import BrandedText from './components/BrandedText';

// import * as pages from './pages';

const App = ({ Page }) => <Page />;

const mapStateToProps = ({ page: Page }) => ({ Page });

export default connect(mapStateToProps)(App);
