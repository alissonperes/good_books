import React, { useState, useEffect } from "react";
import submitRating from "../../actions/submitRating";
import "./RatingForm.css";

const RatingForm = props => {
  const [newRating, setNewRating] = useState({
    title: "",
    description: "",
    score: 5
  });

  return (
    <form onSubmit={props.onSubmit} className="new-rating">
      <div className="form-item">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          required
          onChange={props.handleChange}
        ></input>
      </div>
      <div className="form-item">
        <label htmlFor="description">Description</label>
        <textarea
          rows="4"
          id="description"
          name="description"
          placeholder="Description"
          required
          onChange={props.handleChange}
        ></textarea>
      </div>
      <div className="form-score">
        <input
          type="radio"
          name="score"
          onChange={props.handleChange}
          value="1"
          required
        />
        <label htmlFor="male">1</label>
        <input
          type="radio"
          name="score"
          onChange={props.handleChange}
          value="2"
        />
        <label htmlFor="female">2</label>
        <input
          type="radio"
          name="score"
          onChange={props.handleChange}
          value="3"
        />
        <label htmlFor="other">3</label>
        <input
          type="radio"
          name="score"
          onChange={props.handleChange}
          value="4"
        />
        <label htmlFor="male">4</label>
        <input
          type="radio"
          name="score"
          onChange={props.handleChange}
          value="5"
          checked
        />
        <label htmlFor="male">5</label>
      </div>
      <div className="form-item">
        <input type="submit" id="submit" name="submit" value="Submit"></input>
      </div>
    </form>
  );
};

export default RatingForm;
