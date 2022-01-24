import {
    FETCH_POKEMON_SUCCESS,
  } from "./actions";
  
  const initialState = {
    pokemon: [],
  };

  // eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POKEMON_SUCCESS:
        return {
          ...state,
          pokemon: [...state.pokemon, ...action.payload],
        };
 
      default:
        return state;
    }
  };

