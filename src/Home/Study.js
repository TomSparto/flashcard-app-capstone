import React from "react";
import GoodStudy from "./GoodStudy.js";
import BadStudy from "./BadStudy.js";

function Study({ currentDeck }) {
  const { cards } = currentDeck;
  return Object.keys(currentDeck).length > 0 && cards.length >= 3 ? (
    <GoodStudy currentDeck={currentDeck} />
  ) : (
    <BadStudy currentDeck={currentDeck} />
  );
}

export default Study;
