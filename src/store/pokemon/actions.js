import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";

export const fetchPokemonSuccess = (pokemon) => ({
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon,
  });

  export const fetchPokemonById = (id) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.get(
          `${apiUrl}/pokemon/${id}`
        );
        dispatch(fetchPokemonSuccess(response.data));
      } catch (e) {
        console.log(e.message);
      }
    };
  };