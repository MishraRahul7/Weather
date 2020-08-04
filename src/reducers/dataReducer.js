import { GET_DATA } from "../actions/types";

export default (state = {}, actions) => {
  switch (actions.type) {
    case GET_DATA:
      return { ...state, data: actions.payload };
    default:
      return state;
  }
};
