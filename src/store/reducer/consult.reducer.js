import {medTypes } from "../actions/consult.actions";

export default function medReducer(state, action) {
  switch (action.type) {
    case medTypes.UPDATE_CONSULTS:
      return [...action.payload];
    default:
      return state;
  }
}
