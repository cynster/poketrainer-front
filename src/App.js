import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { selectAppLoading } from "./store/appState/selectors";
import { getTrainerWithStoredToken } from "./store/trainers/actions";

import Navigation from "./components/navigation";
import Loading from "./components/loading";
import MessageBox from "./components/messageBox";

import Home from "./pages/home";
import AllTrainers from "./pages/allTrainers";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path='/myspace' element={<MySpace />} />
        <Route path='/spaces/:id' element={<SpaceDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;
