import './App.css';

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Loading from "./components/loading";
import MessageBox from "./components/messageBox";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { selectAppLoading } from "./store/appState/selectors";

import Home from "./pages/home";
import AllTrainers from "./pages/allTrainers";

function App() {
  const isLoading = useSelector(selectAppLoading);

  return (
    <div className='App'>
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/alltrainers' element={<AllTrainers />} />
        {/* <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myspace' element={<MySpace />} />
        <Route path='/spaces/:id' element={<SpaceDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;
