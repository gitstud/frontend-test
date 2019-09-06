import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { connectRoutes } from 'redux-first-router';
import thunk from 'redux-thunk';

import { getInitialListings } from './actions';

import page from './reducers/pageReducer';
import app from './reducers/appReducer';

// map actions to urls
const routesMap = {
    HOME: '/',
    LISTING: '/listing/:id'
};

const { reducer: location, middleware, enhancer } = connectRoutes(routesMap);

const rootReducer = combineReducers({
    app,
    page,
    location,
});

// combine routes middleware and thunk
const middlewares = applyMiddleware(middleware, thunk)

const store =  createStore(
    rootReducer,
    {},
    compose(enhancer, middlewares),
);

getInitialListings(store);

export default store;

