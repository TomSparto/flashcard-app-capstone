import React from "react";
import { useHistory, Link, useRouteMatch } from "react-router-dom";
import { deleteDeck } from "../utils/api";

import Cards from "./Cards.js";

function DeckView({ currentDeck }) {
  const { name, description, id } = currentDeck;
  const history = useHistory();
  const { url } = useRouteMatch();

  const handleDelete = async (deckId) => {
    const result = window.confirm("Delete this deck?");
    if (result) {
      await deleteDeck(deckId);
      history.push("/");
      history.go(0);
    }
  };
  if (!currentDeck) return null;
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {name}
          </li>
        </ol>
      </nav>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`${url}/edit`}>
        <button type="button" className="btn btn-secondary mr-3">
          Edit
        </button>
      </Link>

      <button type="button" className="btn btn-primary mr-3">
        Study
      </button>
      <Link to={`${url}/cards/new`}>
        <button type="button" className="btn btn-primary">
          + Add Cards
        </button>
      </Link>

      <button
        type="button"
        onClick={() => handleDelete(id)}
        className="btn btn-danger float-right"
      >
        Delete
      </button>
      <h2 className="py-3">Cards</h2>
      <Cards currentDeck={currentDeck} />
    </div>
  );
}

export default DeckView;
