import axios from "axios";
import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./actionsType";

export const addFavorites = (character) => {

  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
        
      return dispatch({
        type: ADD_FAVORITES,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

/*
 //////////////sin async await ////////////////
 export const addFavorites = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character)
    console.log(character)
    .then(({ data }) => {
      return dispatch({
        type: ADD_FAVORITES,
        payload: data
      });
    });
  };
};
*/

////////////////sin backend/////////////

/*export const addFavorites = (character) => {

    return{
        type: "ADD_FAVORITES",
        payload: character
    };
};
*/
export const deleteFavorites = (id) => {
  console.log("id del front",id)
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  try {
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: DELETE_FAVORITES,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
