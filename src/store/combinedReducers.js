import { combineReducers } from "redux";

import newsReducers from "./newsSlice";

export default combineReducers({
  news: newsReducers,
});
