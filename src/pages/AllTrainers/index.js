import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";

import { fetchTrainers } from "../../store/trainers/actions";
import { selectTrainers } from "../../store/trainers/selectors";

import TrainerCard from "../../components/TrainerCard";

export default function AllTrainers() {
  const dispatch = useDispatch();
  const trainers = useSelector(selectTrainers);

  useEffect(() => {
    dispatch(fetchTrainers());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Row xs={1} md={5}>
          {trainers.map((trainer) => {
            return (
              <TrainerCard
                key={trainer.id}
                id={trainer.id}
                username={trainer.username}
                buddy={trainer.buddy}
                image={trainer.image}
                created={trainer.createdAt}
                party={trainer.parties}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}
