import { ADD_TO_FAV } from "./Constants/constants";

export const addToFav = (data) => {
  console.log("action", data); //this data is cmng from compo nd passing to cont
  return {
    type: "ADD_TO_FAV",
    data: data,
  };
};
