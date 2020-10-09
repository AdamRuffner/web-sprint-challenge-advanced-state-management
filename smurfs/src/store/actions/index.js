import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response });
    });
};

export const addSmurfs = (data) => (dispatch) => {
  dispatch({ type: ADD_SMURF });
  axios
  .post("http://localhost:3333/smurfs", data)
  .then((res) => {
    dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
  });
};
