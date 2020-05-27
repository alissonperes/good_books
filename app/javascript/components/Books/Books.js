import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";
import styled from "styled-components";

const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-evenly;
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
    <div className="home">
      <BooksContainer>{grid}</BooksContainer>
    </div>
  );
};

export default Books;
