import * as types from "../types";

function addWorkerToSelected(worker) {
  return {
    type: types.ADD_TO_SELECTED,
    payload: { worker }
  };
}

function addWorkerToUnselected(worker) {
  return {
    type: types.ADD_TO_UNSELECTED,
    payload: { worker }
  };
}

export function selectWorker(id) {
  return (dispatch, getState) => {
    const worker = getState().inventory.workers[0];
    dispatch(addWorkerToSelected(worker));
  };
}

export function unselectWorker(id) {
  return (dispatch, getState) => {
    const worker = getState().inventory.workers[0];
    dispatch(addWorkerToUnselected(worker));
  };
}
