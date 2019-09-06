import Axios from "axios";

export const CHECK_ITEM = 'CHECK_ITEM';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const checkItem = (name) => async (dispatch, getState) => {
    const response = await Axios.get('http://localhost:9081/maxwell').catch(err => console.log(err));
    console.log(response);
    dispatch({
        type: CHECK_ITEM,
        payload: name,
    });
}

export const clearFilters = () => dispatch => {
    dispatch({ type: CLEAR_FILTERS });
}
