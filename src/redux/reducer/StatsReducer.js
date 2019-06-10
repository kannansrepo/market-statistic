import * as types from "../actionType";
import initialState from "./initialState";

export default function courseReducer(state = initialState.stats, action) {
  switch (action.type) {
    case types.LOAD_STATS_SUCCESS:
      return action.stats;
    default:
      return state;
  }
}
