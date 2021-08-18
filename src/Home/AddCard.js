import React from "react";
import { Link, useHistory } from "react-router-dom";
import { createCard } from "../utils/api";
import CardForm from "./CardForm.js";

function AddCard({ currentDeck, front, setFront, back, setBack }) {
  const { name, id } = currentDeck;
  const history = useHistory();

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
      <CardForm
        front={front}
        setFront={setFront}
        back={back}
        setBack={setBack}
      />
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
