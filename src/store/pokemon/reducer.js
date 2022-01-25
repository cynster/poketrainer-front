import { FETCH_POKEMON_SUCCESS, FETCH_BUDDY_SUCCESS } from "./actions";

const initialState = {
  pokemon: [],
  buddy: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: [...state.pokemon, action.payload],
      };
    case FETCH_BUDDY_SUCCESS:
      return {
        ...state,
        buddy: {...action.payload},
      };
    default:
      return state;
  }
};
