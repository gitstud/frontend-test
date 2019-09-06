import Axios from "axios";
import produce from "immer";

export const CHECK_ITEM = 'CHECK_ITEM';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const UPDATE_RESULTS = 'UPDATE_RESULTS';

const makeQuery = filters =>
  Object.keys(filters).reduce((acc, cur) => {
    // use the key (cur) to get the object in filters
    const value = filters[cur];
    // use the type property of filter options to relate filter option values
    if (acc[value.type]) {
      const appended = (acc[value.type] += `,${value.data}`);

      // The data structure I set up has the ALL option type value set to the string
      // containing all of the values so here I am removing duplicate values from the string
      // with another reducer

      const reduced = Object.keys(
        appended.split(",").reduce((a, c) => {
          a[c] = c;
          return a;
        }, {})
      );

      acc[value.type] = reduced.join(",");
    } else {
      acc[value.type] = value.data;
    }

    return acc;
  }, {});

export const checkItem = (item) => async (dispatch, getState) => {
    // get filters object from state
    const { filters } = getState();
    // create new filters object with immer
    const newFilters = produce(filters, draft => {
        // if item id exists in filters then remove it
        // otherwise add it to the object
        if (draft[item.id]) {
            delete draft[item.id];
        } else {
            draft[item.id] = item;
        }
    });

    dispatch({
      type: CHECK_ITEM,
      payload: newFilters
    });
    const queryParts = makeQuery(newFilters);
    const { data: { search } } = await Axios.post(
      "http://localhost:9081/listings",
      makeQuery(newFilters)
    ).catch(err => console.log(err));
    console.log(search);
    dispatch({
      type: UPDATE_RESULTS,
      payload: search.business
    });
};

export const clearFilters = () => async (dispatch) => {
    dispatch({ type: CLEAR_FILTERS });
    const listings = await localStorage.getItem("listings");
    if (listings) {
      dispatch({
        type: UPDATE_RESULTS,
        payload: JSON.parse(listings)
      });
    } else {
      const {
        data: { search }
      } = await Axios.post("http://localhost:9081/listings").catch(err =>
        console.log(err)
      );
      await localStorage.setItem("listings", JSON.stringify(search.business));
      dispatch({
        type: UPDATE_RESULTS,
        payload: search.business
      });
    }
};

export const getInitialListings = async ({ dispatch }) => {
  const listings = await localStorage.getItem('listings');
  if (listings) {
    dispatch({
      type: UPDATE_RESULTS,
      payload: JSON.parse(listings)
    });
  } else {
    const {
      data: { search }
    } = await Axios.post("http://localhost:9081/listings").catch(err =>
      console.log(err)
    );
    await localStorage.setItem('listings', JSON.stringify(search.business));
    dispatch({
      type: UPDATE_RESULTS,
      payload: search.business
    });
  }
}
