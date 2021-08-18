import React from "react";
import { Link } from "react-router-dom";
import Decks from "./Decks.js";

function Home({ decks }) {
  return (
    <>
      <div className="col-12">
        <Link to="/decks/new">
          <button type="button" className="btn btn-secondary">
            + Create Deck
          </button>
        </Link>
      </div>
      <Decks decks={decks} />
    </>
  );
}

export default Home;
