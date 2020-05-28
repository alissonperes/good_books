import axios from "axios";
import slugify from "slugify";
const createBook = async bookInfo => {
  try {
    const result = await axios.post("/api/v1/books", {
      book: bookInfo,
      "Content-Type": "application/json"
    });
    const data = result.data.data;
    return data;
  } catch (e) {
    location.href = `/books/${slugify(bookInfo.title, "-").toLowerCase()}`;
  }
};

export default createBook;
