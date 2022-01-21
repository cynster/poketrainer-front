import { FETCH_TRAINERS_SUCCESS, TRAINER_DETAILS_FETCHED } from "./actions";

const initialState = {
  noTrainers: 0,
  allTrainers: [],
  trainerDetails: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRAINERS_SUCCESS:
      return {
        ...state,
        allTrainers: [...state.allTrainers, ...action.payload],
      };
    case TRAINER_DETAILS_FETCHED:
      return { ...state, trainerDetails: { ...action.payload } };

    default:
      return state;
  }
};
