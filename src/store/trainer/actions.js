import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken, selectTrainer } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOG_OUT = "LOG_OUT";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const PROFILE_UPDATED = "PROFILE_UPDATED";
export const PARTY_UPDATED = "PARTY_UPDATED";
export const BADGES_UPDATED = "BADGES_UPDATED";

const updateBadgesSucces = (profile) => {
  return {
    type: BADGES_UPDATED,
    payload: profile,
  };
};

const loginSuccess = (trainerWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: trainerWithToken,
  };
};

const tokenStillValid = (trainerWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: trainerWithoutToken,
});

export const profileUpdated = (profile) => ({
  type: PROFILE_UPDATED,
  payload: profile,
});

export const partyUpdated = (party) => ({
  type: PARTY_UPDATED,
  payload: party,
});

export const register = (username, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, {
        username: username,
        email: email,
        password: password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          "Account created! Welcome trainer!"
        )
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        // console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(
        showMessageWithTimeout("success", false, "Welcome back trainer!", 1500)
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        // console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getTrainerWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      //console.log(error.response.message);

      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const updateProfile = (image, buddy, mainColor, secondaryColor) => {
  return async (dispatch, getState) => {
    try {
      const { token, id } = selectTrainer(getState());
      dispatch(appLoading());

      const response = await axios.patch(
        `${apiUrl}/trainers/${id}`,
        {
          image,
          buddy,
          mainColor,
          secondaryColor,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);

      dispatch(
        showMessageWithTimeout("success", false, "update successfull", 3000)
      );
      dispatch(profileUpdated(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const updateBadges = (
  badge1,
  badge2,
  badge3,
  badge4,
  badge5,
  badge6,
  badge7,
  badge8
) => {
  return async (dispatch, getState) => {
    try {
      const { token, id } = selectTrainer(getState());
      dispatch(appLoading());

      const response = await axios.patch(
        `${apiUrl}/trainers/badges/${id}`,
        {
          badge1,
          badge2,
          badge3,
          badge4,
          badge5,
          badge6,
          badge7,
          badge8,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);

      dispatch(
        showMessageWithTimeout("success", false, "update successfull", 3000)
      );
      dispatch(updateBadgesSucces(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const updateParty = (
  firstPokemon,
  secondPokemon,
  thirdPokemon,
  fourthPokemon,
  fifthPokemon,
  sixthPokemon
) => {
  return async (dispatch, getState) => {
    try {
      const { token, id } = selectTrainer(getState());
      dispatch(appLoading());

      const response = await axios.patch(
        `${apiUrl}/party/${id}`,
        {
          firstPokemon,
          secondPokemon,
          thirdPokemon,
          fourthPokemon,
          fifthPokemon,
          sixthPokemon,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);

      dispatch(
        showMessageWithTimeout("success", false, "update successfull", 3000)
      );
      dispatch(partyUpdated(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const logOut = () => ({ type: LOG_OUT });
