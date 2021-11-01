import { ADD_TO_FAV } from "../Constants/constants";
const initialState = {
  favData: [],
};
export default function favMovieSection(state = initialState, action) {
  if (action.type === "ADD_TO_FAV") {
    return {
      ...state, //initial data
      favData: [...state.favData, action.data],
    };
  }
  return state;
}
