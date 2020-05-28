import React, { useState, useEffect } from "react";
import styled from "styled-components";
import submitRating from "../../actions/submitRating";

const NewRating = styled.div`
  margin: 1.5rem 3rem 0;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem 0;
`;

const FormScore = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormInput = styled.input`
  flex-grow: 1;
  margin-top: 40px;
`;

const ScoreInput = styled.input``;
const FormSubmit = styled.input`
  flex-grow: 1;
`;
const FormTextArea = styled.textarea`
  flex-grow: 1;
  margin-top: 40px;
`;

const RatingForm = props => {
  const [newRating, setNewRating] = useState({
    title: "",
    description: "",
    score: 5
  });

  return (
    <NewRating onSubmit={props.onSubmit}>
      <FormItem className="form-item">
        <label htmlFor="title">Title</label>
        <FormInput
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          required
          onChange={props.handleChange}
        ></FormInput>
      </FormItem>
      <FormItem className="form-item">
        <label htmlFor="description">Description</label>
        <FormTextArea
          rows="4"
          id="description"
          name="description"
          placeholder="Description"
          required
          onChange={props.handleChange}
        ></FormTextArea>
      </FormItem>
      <FormScore>
        <ScoreInput
          type="radio"
          name="score"
          onChange={props.handleChange}
          value="1"
          required
        />
        <label htmlFor="1">1</label>
        <ScoreInput
          type="radio"
          name="score"
          onChange={props.handleChange}
          value="2"
        />
        <label htmlFor="2">2</label>
        <ScoreInput
          type="radio"
          name="score"
          onChange={props.handleChange}
          value="3"
        />
        <label htmlFor="3">3</label>
        <ScoreInput
          type="radio"
          name="score"
          onChange={props.handleChange}
          value="4"
        />
        <label htmlFor="4">4</label>
        <ScoreInput
          type="radio"
          name="score"
          onChange={props.handleChange}
          value="5"
          checked
        />
        <label htmlFor="score">5</label>
      </FormScore>
      <FormItem className="form-item">
        <FormSubmit
          type="submit"
          id="submit"
          name="submit"
          value="Submit"
        ></FormSubmit>
      </FormItem>
    </NewRating>
  );
};

export default RatingForm;
