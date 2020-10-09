import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
} from "../actions";

const initialState = {
  smurfData: [],
  isFetching: false,
  error: "",
  updated: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfData: action.payload,
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ADD_SMURF:
      return {
        ...state,
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        updated: true,
        smurfData: action.payload,
      };
    default:
      return state;
  }
};
