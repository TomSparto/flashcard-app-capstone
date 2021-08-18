import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readCard, updateCard } from "../utils/api";

function EditCard({ currentDeck }) {
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

  const handleFrontChange = (event) => {
    setCurrentCard({ ...currentCard, front: event.target.value });
  };
  const handleBackChange = (event) => {
    setCurrentCard({ ...currentCard, back: event.target.value });
  };

  const handleSubmit = async (currentCard) => {
    await updateCard(currentCard);
    history.push(`/decks/${id}`);
    history.go(0);
  };
  console.log(currentCard);
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
      <form className="d-flex flex-column">
        <label className="font-weight-bold" name="front" id="front">
          Front:
          <input
            type="text"
            style={{ width: "100%" }}
            value={currentCard.front}
            onChange={handleFrontChange}
          />
        </label>
        <label className="font-weight-bold" name="back" id="back">
          Back:
          <textarea
            style={{ width: "100%" }}
            value={currentCard.back}
            onChange={handleBackChange}
          ></textarea>
        </label>
      </form>
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
