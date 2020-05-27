import React from "react";
import { BroweserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px outset;
  margin: 2rem auto;
  padding: 1rem 0.4rem;
  width: 100%;
  justify-content: space-between;
`;

const BookTitle = styled.div``;
const BookAuthor = styled.div``;
const BookScore = styled.div`
  font-size: 17px;
`;
const BookLink = styled.div``;

const Book = props => {
  return (
    <BookCard>
      <BookTitle>
        <h2>{props.attributes.title}</h2>
      </BookTitle>
      <BookAuthor>
        <p>{props.attributes.author}</p>
      </BookAuthor>
      <BookScore>
        <p>
          Rating: {props.attributes.avg_score}
          <span>&#9734;</span>
        </p>
      </BookScore>
      <BookLink>
        <Link to={`/books/${props.attributes.slug}`}>View book</Link>
      </BookLink>
    </BookCard>
  );
};

export default Book;
