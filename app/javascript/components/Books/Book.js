import React from "react";
import { BroweserRouter as Router, Link } from "react-router-dom";
import "./Book.css";

const Book = props => {
  return (
    <div className="book-card">
      <div className="book-title">
        <h2>{props.attributes.title}</h2>
      </div>
      <div className="book-author">
        <p>{props.attributes.author}</p>
      </div>
      <div className="book-score">
        <p>
          Rating: {props.attributes.avg_score}
          <span>&#9734;</span>
        </p>
      </div>
      <div className="book-link">
        <Link to={`/books/${props.attributes.slug}`}>View book</Link>
      </div>
    </div>
  );
};

export default Book;
