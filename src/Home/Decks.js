import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api";

function Deck({ decks }) {
  const history = useHistory();

  const handleDelete = async (deckId) => {
    const result = window.confirm("Delete this deck?");
    if (result) {
      await deleteDeck(deckId);
      history.go(0);
    }
  };
  if (decks && decks.length > 0) {
    const deck = decks.map((deck) => (
      <div key={deck.id} className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{deck.name}</h5>
          <h6 className="mb-2 text-muted">
            {deck.cards ? deck.cards.length : 0} cards
          </h6>
          <p className="card-text">{deck.description}</p>

          <Link to={`/decks/${deck.id}`}>
            <button type="button" className="btn btn-secondary mr-3">
              View
            </button>
          </Link>
          <Link to={`/decks/${deck.id}/study`}>
            <button type="button" className="btn btn-primary">
              Study
            </button>
          </Link>

          <button
            type="button"
            onClick={() => handleDelete(deck.id)}
            className="btn btn-danger float-right"
          >
            Delete
          </button>
        </div>
      </div>
    ));
    return <>{deck}</>;
  }
  return null;
}

export default Deck;
