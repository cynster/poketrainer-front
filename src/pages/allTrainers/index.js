import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

// import { fetchTrainers } from "../../store/trainers/actions";
// import { selectTrainers } from "../../store/trainers/selectors";
// import trainerCard from "../../components/trainerCard";

export default function allTrainers() {
    // const dispatch = useDispatch();
    // const trainers = useSelector(selectTrainers);
  
    // useEffect(() => {
    //   dispatch(fetchTrainers());
    // }, [dispatch]);
  
    return (
      <>
        <Container>
        <h1>All trainers:</h1>
        </Container>
      </>
    );
  }
  