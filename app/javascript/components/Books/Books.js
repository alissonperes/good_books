import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";
import styled from "styled-components";

const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-evenly;
`;

const BooksHome = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const NewBookForm = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 3rem;
`;

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/books.json")
      .then(result => setBooks(result.data.data))
      .catch(result => console.log(result));
  }, [books.length]);

  const grid = books.map(item => {
    return <Book key={item.attributes.title} attributes={item.attributes} />;
  });

  return (
    <BooksHome>
      <NewBookForm>
        <form>
          <label for="title">Title</label>
          <input type="text" id="title" required />
          <label for="author">Author</label>
          <input type="text" id="author" required />
          <input type="submit" value="Add book" />
        </form>
      </NewBookForm>
      <BooksContainer>{grid}</BooksContainer>
    </BooksHome>
  );
};

export default Books;
