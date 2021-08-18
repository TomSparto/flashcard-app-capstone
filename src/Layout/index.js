import React, { useState, useEffect } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom";
import { listDecks } from "../utils/api/index.js";

import Home from "../Home/Home.js";
import CreateDeck from "../Home/CreateDeck.js";
import Deck from "../Home/Deck.js";
import EditDeck from "../Home/EditDeck.js";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    async function getDecks() {
      const response = await listDecks();
      setDecks(response);
    }
    getDecks();
  }, [setDecks]);
  return (
    <>
      <Header />

      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home decks={decks} />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck
              decks={decks}
              name={name}
              setName={setName}
              description={description}
              setDescription={setDescription}
            />
          </Route>
          <Route exact path={`/decks/:deckId/edit`}>
            <EditDeck
              name={name}
              setName={setName}
              description={description}
              setDescription={setDescription}
            />
          </Route>
          <Route path="/decks/:deckId">
            <Deck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
