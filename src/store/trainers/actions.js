import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const FETCH_TRAINERS_SUCCESS = "FETCH_TRAINERS_SUCCESS";
export const TRAINER_DETAILS_FETCHED = "TRAINER_DETAILS_FETCHED";
export const FETCH_TRAINERS_COUNT_SUCCESS = "FETCH_TRAINERS_COUNT_SUCCESS";

export const fetchTrainersSuccess = (trainers) => ({
    type: FETCH_TRAINERS_SUCCESS,
    payload: trainers,
  });

  const trainerDetailsFetched = (trainer) => ({
    type: TRAINER_DETAILS_FETCHED,
    payload: trainer,
  });

   const fetchTrainersCountSuccess = (trainersCount) => ({
    type: FETCH_TRAINERS_COUNT_SUCCESS,
    payload: trainersCount,
  });

  export const fetchTrainers = () => {
    return async (dispatch, getState) => {
      try {
        const trainersCount = getState().trainers.allTrainers.length;
        const response = await axios.get(
          `${apiUrl}/trainers?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${trainersCount}`
        );
  
        
        dispatch(fetchTrainersSuccess(response.data.trainers.rows));
      } catch (e) {
        console.log(e.message);
      }
    };
  };

  export const fetchTrainerById = (id) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.get(`${apiUrl}/trainers/trainer/${id}`);
        console.log(response);
        dispatch(trainerDetailsFetched(response.data.trainer));
      } catch (e) {
        console.log(e);
      }
    };
  };

  export const fetchTrainersCount = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/trainers/count`);
      dispatch(fetchTrainersCountSuccess(response.data.trainersCount));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
         console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
         console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};