import axios from "axios";

const submitRating = async rating => {
  try {
    const result = await axios.post("/api/v1/reviews", {
      review: rating,
      "Content-Type": "application/json"
    });
    const data = result.data.data;
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export default submitRating;
