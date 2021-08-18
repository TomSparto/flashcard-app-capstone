import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readCard, updateCard } from "../utils/api";
import CardForm from "./CardForm.js";

function EditCard({ currentDeck, front, setFront, back, setBack }) {
  const [currentCard, setCurrentCard] = useState({});
  const { name, id } = currentDeck;
  const { cardId } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function getCard() {
      const response = await readCard(cardId);
      setCurrentCard(response);
    }
    getCard();
  }, [cardId]);

  useEffect(() => {
    setFront(currentCard.front);
    setBack(currentCard.back);
  }, [setFront, setBack, currentCard.front, currentCard.back]);

  const handleSubmit = async (currentCard) => {
    await updateCard({ ...currentCard, front, back });
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
            Edit Card {cardId}
          </li>
        </ol>
      </nav>
      <h2>Edit Card</h2>
      <CardForm
        front={front}
        setFront={setFront}
        back={back}
        setBack={setBack}
      />
      <Link to={`/decks/${id}`}>
        <button type="button" className="btn btn-secondary mr-3">
          Cancel
        </button>
      </Link>
      <button
        type="button"
        className="btn btn-primary my-3"
        onClick={() => handleSubmit(currentCard)}
      >
        Submit
      </button>
    </div>
  );
}

export default EditCard;
