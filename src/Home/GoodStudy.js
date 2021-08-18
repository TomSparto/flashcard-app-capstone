import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function GoodStudy({ currentDeck }) {
  const { name, id, cards } = currentDeck;
  const [cardFlip, setCardFlip] = useState(false);
  const [shownCard, setShownCard] = useState(0);
  const history = useHistory();

  const handleFlip = () => {
    setCardFlip(!cardFlip);
  };

  const handleNext = () => {
    setShownCard((current) => current + 1);
    setCardFlip(false);
    if (shownCard + 1 === cards.length) {
      const result = window.confirm("Restart cards?");
      if (result) {
        history.go(0);
      } else {
        history.push("/");
      }
    }
  };

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
        <h2>Studying: {name}</h2>
        <div className="card my-3">
          <div className="card-body">
            <h4>
              Card {shownCard + 1} of {cards.length}
            </h4>
            <p className="card-text">
              {!cardFlip
                ? `Front: ${cards[shownCard].front}`
                : `Back: ${cards[shownCard].back}`}
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleFlip}
            >
              Flip
            </button>
            {cardFlip && (
              <button
                type="button"
                className="btn btn-primary mx-3"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default GoodStudy;
