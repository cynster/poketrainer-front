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
export const FETCH_LATEST_FIVE_TRAINERS_SUCCESS =
  "FETCH_LATEST_FIVE_TRAINERS_SUCCESS";

export const fetchTrainersSuccess = (trainers) => ({
  type: FETCH_TRAINERS_SUCCESS,
  payload: trainers,
});

export const fetchLatestFiveTrainersSuccess = (latestFiveTrainers) => ({
  type: FETCH_LATEST_FIVE_TRAINERS_SUCCESS,
  payload: latestFiveTrainers,
});

const trainerDetailsFetched = (trainer) => ({
  type: TRAINER_DETAILS_FETCHED,
  payload: trainer,
});

const fetchTrainersCountSuccess = (trainersCount) => {
  return {
    type: FETCH_TRAINERS_COUNT_SUCCESS,
    payload: trainersCount,
  };
};

export const fetchTrainers = () => {
  return async (dispatch, getState) => {
    try {
      const trainersCount = getState().trainers.allTrainers.length;
      const response = await axios.get(
        `${apiUrl}/trainers?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${trainersCount}&order=ASC`
      );

      dispatch(fetchTrainersSuccess(response.data.trainers.rows));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchLatestFiveTrainers = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/trainers?limit=5&order=DESC`);
      dispatch(fetchLatestFiveTrainersSuccess(response.data.trainers.rows));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchTrainerById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/trainers/trainer/${id}`);
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
