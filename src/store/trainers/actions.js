import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";

export const FETCH_TRAINERS_SUCCESS = "FETCH_TRAINERS_SUCCESS";
export const TRAINER_DETAILS_FETCHED = "TRAINER_DETAILS_FETCHED";

export const fetchTrainersSuccess = (trainers) => ({
    type: FETCH_TRAINERS_SUCCESS,
    payload: trainers,
  });

  const trainerDetailsFetched = (trainer) => ({
    type: TRAINER_DETAILS_FETCHED,
    payload: trainer,
  });

  export const fetchTrainers = () => {
    return async (dispatch, getState) => {
      try {
        const trainersCount = getState().trainers.allTrainers.length;
        const response = await axios.get(
          `${apiUrl}/trainers?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${trainersCount}`
        );
  
        // console.log(response.data);
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