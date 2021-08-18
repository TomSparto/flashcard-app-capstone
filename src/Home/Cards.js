import React from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { deleteCard } from "../utils/api";

function Cards({ currentDeck }) {
  const { cards } = currentDeck;
  const history = useHistory();
  const { url } = useRouteMatch();

  const handleDelete = async (cardId) => {
    const result = window.confirm("Delete this card?");
    if (result) {
      await deleteCard(cardId);
      history.go(0);
    }
  };

  if (!cards || cards.length === 0)
    return <p>No cards currently in this deck.</p>;
  return cards.map((card) => (
    <div key={card.id} className="card my-3">
      <div className="card-body">
        <p className="card-text">
          <b>Front:</b> {card.front}
        </p>
        <p className="card-text">
          <b>Back:</b> {card.back}
        </p>
        <button
          type="button"
          onClick={() => handleDelete(card.id)}
          className="btn btn-danger float-right mx-3"
        >
          Delete
        </button>
        <Link to={`${url}/cards/${card.id}/edit`}>
          <button type="button" className="btn btn-secondary float-right">
            Edit
          </button>
        </Link>
      </div>
    </div>
  ));
}

export default Cards;
