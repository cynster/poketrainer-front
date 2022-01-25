import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_BUDDY_SUCCESS = "FETCH_BUDDY_SUCCESS";

export const fetchPokemonSuccess = (pokemon) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon,
  };
};

export const fetchBuddySuccess = (buddy) => {
  return {
    type: FETCH_BUDDY_SUCCESS,
    payload: buddy,
  };
};

export const fetchPokemonById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/pokemon/${id}`);
      dispatch(fetchPokemonSuccess(response.data.pokemon));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchBuddyById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/pokemon/${id}`);
      dispatch(fetchBuddySuccess(response.data.pokemon));
    } catch (e) {
      console.log(e.message);
    }
  };
};
