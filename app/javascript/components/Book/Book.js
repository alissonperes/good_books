import React, { useState, useEffect } from "react";
import { BroweserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import pluralize from "pluralize";
import submitRating from "../../actions/submitRating";
import RatingForm from "./RatingForm";
import "./Book.css";

const Book = props => {
  const { slug } = props.match.params;
  const [book, setBook] = useState({ data: { attributes: {} }, included: [] });
  const [ratings, setRatings] = useState([]);
  const [newRating, setNewRating] = useState({
    title: "",
    description: "",
    score: 5
  });

  const bookSlug = props.match.params.slug;
  const bookDataFromApi = () => {
    axios
      .get(`/api/v1/books/${slug}`)
      .then(result => {
        setBook(result.data);
        setRatings(result.data.included);
      })
      .catch(result => console.log(result));
  };
  useEffect(() => {
    bookDataFromApi();
  }, [book.length]);

  const reviews = ratings.map(x => (
    <section className="review-item" key={x.id}>
      <hr />
      <h4>{x.attributes.title}</h4>
      <p>{x.attributes.description}</p>
      <span>{x.attributes.score} &#9734;</span>
    </section>
  ));

  const submitedRating = e => {
    e.preventDefault();
    const ratingObject = {
      title: newRating.title,
      description: newRating.description,
      score: parseInt(newRating.score),
      book_id: parseInt(book.data.id)
    };

    e.target.reset();
    submitRating(ratingObject).then(result => {
      setRatings(prev => [...prev, result]);
      bookDataFromApi();
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewRating({ ...newRating, [name]: value });
  };

  return (
    <div className="main-book">
      <div className="book">
        <div className="book-info">
          <h1>{book.data.attributes.title}</h1>
          <h3>{book.data.attributes.author}</h3>
          <div className="review-div">
            <p>
              {book.included.length} {pluralize("review", book.included.length)}
            </p>
            <p>
              {book.data.attributes.avg_score}
              <span>&#9734;</span>
            </p>
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="reviews">{reviews}</div>
      </div>
      <div className="rating-form">
        <RatingForm
          book={book}
          onSubmit={submitedRating}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Book;
