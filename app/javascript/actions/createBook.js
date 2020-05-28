import axios from "axios";

const createBook = async bookInfo => {
  try {
    const result = await axios.post("/api/v1/books", {
      book: bookInfo,
      "Content-Type": "application/json"
    });
    const data = result.data.data;
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export default createBook;