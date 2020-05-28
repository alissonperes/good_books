import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";
import createBook from "../../actions/createBook";
import styled from "styled-components";

const BooksHome = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const BooksContainer = styled.div`
  display: grid;
  margin-top: 3rem;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-evenly;
`;

const NewBookForm = styled.div`
  display: flex;
  position: absolute;
  top: 2rem;
  left: 3rem;
`;

const Books = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({});

  useEffect(() => {
    axios
      .get("/api/v1/books.json")
      .then(result => setBooks(result.data.data))
      .catch(result => console.log(result));
  }, [books.length]);

  const handleSubmit = e => {
    e.preventDefault();
    createBook(newBook).then(result => {
      setBooks(prev => [...books, result]);
    });
    e.target.reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const grid = books.map(item => {
    return <Book key={item.attributes.title} attributes={item.attributes} />;
  });
  const currentYear = new Date().getFullYear();
  return (
    <BooksHome>
      <NewBookForm>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChange}
            type="text"
            id="title"
            name="title"
            required
          />
          <label htmlFor="author">Author</label>
          <input
            onChange={handleChange}
            type="text"
            id="author"
            name="author"
            required
          />
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            name="year"
            min="868"
            max={currentYear}
            placeholder="Year"
            required
            onChange={handleChange}
          ></input>
          <input type="submit" value="Add book" />
        </form>
      </NewBookForm>
      <BooksContainer>{grid}</BooksContainer>
    </BooksHome>
  );
};

export default Books;
