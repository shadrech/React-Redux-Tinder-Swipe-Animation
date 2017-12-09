import * as types from "../types";
import data from "../data";

const INITIAL_STATE = {
  isFetching: false,
  workers: data.slice(0, 10),
  error: null
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_TO_SELECTED:
      return Object.assign(state, {workers: state.workers.slice(1)});

    case types.ADD_TO_UNSELECTED:
      return Object.assign(state, {workers: state.workers.slice(1)});

    default:
      return state;
  }
}