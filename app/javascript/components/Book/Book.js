import React, { useState, useEffect } from "react";
import { BroweserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import pluralize from "pluralize";
import styled from "styled-components";
import submitRating from "../../actions/submitRating";
import RatingForm from "./RatingForm";

const MainBook = styled.div`
  height: calc(100vh - 90px);
`;
const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px outset;
  margin: 2rem auto;
  padding: 1rem 0.4rem;
  justify-content: space-between;
  width: 40%;
`;
const BookContainer = styled.div`
  display: flex;
  height: 100%;
  width: 60vw;
`;
const ReviewsContainer = styled.div`
  margin-bottom: 2rem;
  overflow: auto;
  padding-top: 1.5rem;
  padding-left: 1rem;
  width: 40%;
`;

const RaitingForm = styled.div`
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  width: 40vw;
`;

const Book = props => {
  const { slug } = props.match.params;
  const [book, setBook] = useState({ data: { attributes: {} }, included: [] });
  const [ratings, setRatings] = useState([]);
  const [newRating, setNewRating] = useState({});

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
    <section key={x.id}>
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
    <MainBook>
      <BookContainer>
        <BookInfo>
          <h1>{book.data.attributes.title}</h1>
          <h3>{book.data.attributes.author}</h3>
          <h5>First released: {book.data.attributes.year}</h5>
          <div>
            <p>
              {book.included.length} {pluralize("review", book.included.length)}
            </p>
            <p>
              {book.data.attributes.avg_score}
              <span>&#9734;</span>
            </p>
            <Link to="/">Home</Link>
          </div>
        </BookInfo>
        <ReviewsContainer>{reviews}</ReviewsContainer>
      </BookContainer>
      <RaitingForm>
        <RatingForm
          book={book}
          onSubmit={submitedRating}
          handleChange={handleChange}
        />
      </RaitingForm>
    </MainBook>
  );
};

export default Book;
