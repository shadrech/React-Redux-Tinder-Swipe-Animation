import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";

import inventory from "./reducers/inventory";
import selected from "./reducers/selected";
import unselected from "./reducers/unselected";

export default createStore(
  combineReducers({
    inventory,
    selected,
    unselected
  }),
  applyMiddleware(ReduxThunk)
);
