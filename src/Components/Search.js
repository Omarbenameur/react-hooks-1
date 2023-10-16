import React from "react";
import ReactStars from "react-stars";
const Search = ({ handleChange, title, ratingChanged }) => {
  return (
    <div className="sea">
      <label className="sear">
        {" "}
        <h1> Search </h1>{" "}
      </label>
      <br />
      <input
        type="text"
        onChange={handleChange}
        value={title}
        className="seaa"
      />
      <ReactStars
        className="searc"
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={"#ffd700"}
      />
    </div>
  );
};

export default Search;
