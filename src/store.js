import { createStore, applyMiddleware } from 'redux';
// using thunk to handle async actions
import thunk from 'redux-thunk';
import produce from 'immer';
import { CHECK_ITEM, CLEAR_FILTERS, UPDATE_RESULTS, getInitialListings } from "./actions";

const initialState = {
  listings: [],
  filters: {},
  query: {},
  limit: 8,
};

const rootReducer = (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        case CHECK_ITEM:
            draft.filters = action.payload;
            break;
        case CLEAR_FILTERS:
            draft.filters = {};
            break;
        case UPDATE_RESULTS:
            console.log(action.payload);
            draft.listings = action.payload;
            break;
    }
});

const store =  createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);

getInitialListings(store);

export default store;

