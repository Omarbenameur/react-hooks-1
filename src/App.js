import { useState } from "react";
import { Movies } from "./data";
import MoviesList from "./Components/MoviesList";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Components/Search";
function App() {
  const [data, setData] = useState(Movies);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className="App">
      <div>
        <Search
          handleChange={handleChange}
          title={title}
          ratingChanged={ratingChanged}
        />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="Movie name"> Movie name</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="Movie description">Movie description</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="Movie poster">Movie poster</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="Movie rating">Movie rating</label>
          <br />
          <input type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <MoviesList
        list={data.filter(
          (movie) =>
            movie.title.toLowerCase().includes(title.toLowerCase()) &&
            movie.rating >= rating
        )}
      />

      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>
    </div>
  );
}

export default App;
