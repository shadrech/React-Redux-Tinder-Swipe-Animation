import * as types from "../types";

let BATCH_NUM = 1;

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

export function selectWorker() {
  return (dispatch, getState) => {
    const worker = getWorker(dispatch, getState);
    dispatch(addWorkerToSelected(worker));
  };
}

export function unselectWorker() {
  return (dispatch, getState) => {
    const worker = getWorker(dispatch, getState);
    dispatch(addWorkerToUnselected(worker));
  };
}

function fetchMoreWorkersSuccess(workers) {
  return {
    type: types.FETCH_WORKERS_SUCCESS,
    payload: { workers }
  };
}

/*
Here we just mock a db call with a "batch" parameter indicating what next batch of workers we require
*/
export function fetchMoreWorkers(batch) {
  return dispatch => {
    fetch("/data.json", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      })
      .then(data => data.json())
      .then(workers => {
        dispatch(fetchMoreWorkersSuccess(workers.slice((batch * 5), (batch * 5) + 5)));
      })
      .catch(err => console.error("ERROR FETCHING WORKERS", err));
  }
}

function getWorker(dispatch, getState) {
  const {workers} = getState().inventory;
  
  if (workers.length === 5)
    dispatch(fetchMoreWorkers(BATCH_NUM++));

  return workers[0];
}