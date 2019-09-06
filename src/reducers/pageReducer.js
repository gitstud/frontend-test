// pageReducer.js
import { NOT_FOUND } from "redux-first-router";

export const NAVIGATE_HOME = "HOME";
export const NAVIGATE_LISTING = "LISTING";

import HOME from "../pages/Home";
import LISTING from '../pages/Listing';
import NotFound from '../pages/NotFound';

const components = {
  HOME,
  LISTING,
  [NOT_FOUND]: NotFound,
};

export default (state = "HOME", action = {}) =>
  components[action.type] || state;
