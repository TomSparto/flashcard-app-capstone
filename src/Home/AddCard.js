import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createCard } from "../utils/api";

function AddCard({ currentDeck }) {
  const { name, id } = currentDeck;
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const history = useHistory();

  const handleFrontChange = (event) => {
    setFront(event.target.value);
  };
  const handleBackChange = (event) => {
    setBack(event.target.value);
  };
  const handleSubmit = async (id) => {
    await createCard(id, {
      front,
      back,
    });
    setFront("");
    setBack("");
  };

  const handleDone = () => {
    history.push(`/decks/${id}`);
    history.go(0);
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${id}`}>{name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <h2>{name}: Add Card</h2>
      <form className="d-flex flex-column">
        <label className="font-weight-bold" name="front" id="front">
          Front:
          <textarea
            style={{ width: "100%" }}
            value={front}
            placeholder="Front side of card."
            onChange={handleFrontChange}
          ></textarea>
        </label>
        <label className="font-weight-bold" name="back" id="back">
          Back:
          <textarea
            style={{ width: "100%" }}
            value={back}
            placeholder="Back side of card."
            onChange={handleBackChange}
          ></textarea>
        </label>
      </form>
      <button
        type="button"
        className="btn btn-secondary mr-3"
        onClick={handleDone}
      >
        Done
      </button>
      <button
        type="button"
        className="btn btn-primary my-3"
        onClick={() => handleSubmit(id)}
      >
        Save
      </button>
    </div>
  );
}

export default AddCard;
