import React from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import DeckForm from "./DeckForm.js";

function CreateDeck({ decks, name, setName, description, setDescription }) {
  const history = useHistory();

  const handleSubmit = async () => {
    await createDeck({
      name,
      description,
    });

    history.push(`${decks.length + 1}`);
    history.go(0);
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h2>Create Deck</h2>
      <DeckForm
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
      />
      <Link to="/">
        <button type="button" className="btn btn-secondary mr-3 my-3">
          Cancel
        </button>
      </Link>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default CreateDeck;
