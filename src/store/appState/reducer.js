import {
  APP_LOADING,
  APP_DONE_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  SET_DARKMODE
} from "./actions";

const initialState = {
  loading: false,
  message: null,
  darkMode: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING:
      return { ...state, loading: true };

    case APP_DONE_LOADING:
      return { ...state, loading: false };

    case SET_MESSAGE:
      return { ...state, message: action.payload };

    case CLEAR_MESSAGE:
      return { ...state, message: null };

    case SET_DARKMODE:
      return { ...state, darkMode: action.payload };

    default:
      return state;
  }
};
