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
export const FETCH_All_POKEMON_NAMES_SUCCESS =
  "FETCH_All_POKEMON_NAMES_SUCCESS";

export const fetchAllPokemonNamesSuccess = (allPokemonNames) => {
  return {
    type: FETCH_All_POKEMON_NAMES_SUCCESS,
    payload: allPokemonNames,
  };
};

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

export const fetchAllPokemonNames = (number) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/pokemon/all/${number}`);
      dispatch(fetchAllPokemonNamesSuccess(response.data.allPokemon));
    } catch (e) {
      console.log(e.message);
    }
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
    if (id) {
      try {
        const response = await axios.get(`${apiUrl}/pokemon/${id}`);
        dispatch(fetchBuddySuccess(response.data.pokemon));
      } catch (e) {
        console.log(e.message);
      }
    }
  };
};
