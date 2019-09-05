import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import produce from 'immer';

const initialState = {
    listings: [],
};

const rootReducer = (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        
    }
});

export default createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);