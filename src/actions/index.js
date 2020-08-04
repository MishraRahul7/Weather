import { GET_DATA } from "./types";
import axios from "axios";

export const getData = () => async (dispatch) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1e1b3737a87fc54a2718055f5bbf7514"
  );
  dispatch({
    type: GET_DATA,
    payload: response.data,
  });
};
