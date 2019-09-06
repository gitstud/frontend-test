import produce from 'immer';
import {
  CHECK_ITEM,
  CLEAR_FILTERS,
  UPDATE_RESULTS,
  getInitialListings
} from "../actions";

const initialState = {
  listings: [],
  filters: {},
  query: {},
  limit: 8,
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHECK_ITEM:
        draft.filters = action.payload;
        break;
      case CLEAR_FILTERS:
        draft.filters = {};
        break;
      case UPDATE_RESULTS:
        draft.listings = action.payload;
        break;
    }
  });
