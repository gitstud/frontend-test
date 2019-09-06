import { createStore, applyMiddleware } from 'redux';
// using thunk to handle async actions
import thunk from 'redux-thunk';
import produce from 'immer';
import { CHECK_ITEM, CLEAR_FILTERS } from "./actions";

const initialState = {
  listings: [],
  filters: {},
};

const rootReducer = (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        case CHECK_ITEM:
            if (draft.filters[action.payload]) {
                draft.filters[action.payload] = false;
            } else {
                draft.filters[action.payload] = true;
            }
            break;
        case CLEAR_FILTERS:
            draft.filters = {};
            break;
    }
});

export default createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);
