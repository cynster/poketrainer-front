import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { selectAppLoading } from "./store/appState/selectors";
import { getTrainerWithStoredToken } from "./store/trainer/actions";

import Navigation from "./components/navigation";
import Loading from "./components/loading";
import MessageBox from "./components/messageBox";

import Home from "./pages/Home";
import AllTrainers from "./pages/AllTrainers";
import TrainerProfile from "./pages/TrainerProfile";
import Register from "./pages/Register";
import Login from "./pages/Login";

//import { selectAllStates } from "./store/trainer/selectors";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  // Because my Redux Devtools is broken, can be removed
  //const allStates = useSelector(selectAllStates)
  //console.log("All states:", allStates)

  useEffect(() => {
    dispatch(getTrainerWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/alltrainers" element={<AllTrainers />} />
        <Route exact path="/trainerprofile/:id" element={<TrainerProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
