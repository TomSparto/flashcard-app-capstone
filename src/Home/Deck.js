import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

import DeckView from "./DeckView.js";
import AddCard from "./AddCard.js";
import EditCard from "./EditCard.js";
import Study from "./Study.js";

function Deck() {
  const [currentDeck, setCurrentDeck] = useState({});
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const { path } = useRouteMatch();
  const { deckId } = useParams();

  useEffect(() => {
    async function getDeck() {
      await readDeck(deckId).then((response) => setCurrentDeck(response));
    }
    getDeck();
  }, [deckId]);

  return (
    <Switch>
      <Route exact path={path}>
        <DeckView currentDeck={currentDeck} />
      </Route>
      <Route exact path={`${path}/cards/new`}>
        <AddCard
          currentDeck={currentDeck}
          front={front}
          setFront={setFront}
          back={back}
          setBack={setBack}
        />
      </Route>
      <Route exact path={`${path}/cards/:cardId/edit`}>
        <EditCard
          currentDeck={currentDeck}
          front={front}
          setFront={setFront}
          back={back}
          setBack={setBack}
        />
      </Route>
      <Route exact path="/decks/:deckId/study">
        <Study currentDeck={currentDeck} />
      </Route>
    </Switch>
  );
}

export default Deck;
