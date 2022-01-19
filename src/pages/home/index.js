import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

// import { fetchSpaces } from "../../store/spaces/actions";
// import { selectSpaces } from "../../store/spaces/selectors";
// import Space from "../../components/Space";

export default function home() {
    // const dispatch = useDispatch();
    // const spaces = useSelector(selectSpaces);
  
    // useEffect(() => {
    //   dispatch(fetchSpaces());
    // }, [dispatch]);
  
    return (
      <>
        <Container>
        <h1>Homepage!</h1>
        </Container>
        <Container>
        <h4>latest trainers:</h4>
        </Container>
        <Container>
        <h4>Total number of trainers:</h4>
        </Container>
      </>
    );
  }
  