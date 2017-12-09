import * as types from "../types";

export default function reducer(state = [], action) {
  switch (action.type) {
    case types.ADD_TO_UNSELECTED:
      return [...state, action.payload.worker];

    default:
      return state;
  }
}