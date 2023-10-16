import React from "react";
import "./MoviesCard.css";
import ReactStars from "react-stars";
import { Card } from "react-bootstrap";
const ratingChanged = (newRating) => {};
const MoviesCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              color2={"#ffd700"}
              value={movie.rating}
            />
            <br />
            {movie.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MoviesCard;
