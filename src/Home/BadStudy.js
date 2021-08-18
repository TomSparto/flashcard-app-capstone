import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function BadStudy({ currentDeck }) {
  const { name, id, cards } = currentDeck;
  const { url } = useRouteMatch();
  const newUrl = url.split("study").splice(0, 1);
  return (
    Object.keys(currentDeck).length > 0 && (
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
              Study
            </li>
          </ol>
        </nav>
        <h2>{name}: Study</h2>
        <h3>Not enough cards.</h3>
        <p>
          You need at least 3 cards to study. There are {cards.length} in this
          deck.
        </p>
        <Link to={`${newUrl}cards/new`}>
          <button type="button" className="btn btn-primary">
            + Add Cards
          </button>
        </Link>
      </div>
    )
  );
}

export default BadStudy;
