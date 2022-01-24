import {
  FETCH_TRAINERS_SUCCESS,
  TRAINER_DETAILS_FETCHED,
  FETCH_TRAINERS_COUNT_SUCCESS,
  FETCH_LATEST_FIVE_TRAINERS_SUCCESS
} from "./actions";

const initialState = {
  allTrainers: [],
  latestFiveTrainers: [],
  trainerDetails: null,
  trainersCount: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRAINERS_SUCCESS:
      return {
        ...state,
        allTrainers: [...state.allTrainers, ...action.payload],
      };
    case FETCH_LATEST_FIVE_TRAINERS_SUCCESS:
      return {
        ...state,
        latestFiveTrainers: [...action.payload],
      };
    case TRAINER_DETAILS_FETCHED:
      return { ...state, trainerDetails: { ...action.payload } };

    case FETCH_TRAINERS_COUNT_SUCCESS:
      return { ...state, trainersCount: action.payload };

    default:
      return state;
  }
};