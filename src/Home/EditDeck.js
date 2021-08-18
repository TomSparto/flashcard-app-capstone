import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import DeckForm from "./DeckForm.js";

function EditDeck({ name, setName, description, setDescription }) {
  const { deckId } = useParams();
  const [currentDeck, setCurrentDeck] = useState({});
  const history = useHistory();

  useEffect(() => {
    async function getDeck() {
      const response = await readDeck(deckId);
      setCurrentDeck(response);
    }
    getDeck();
  }, [deckId]);

  useEffect(() => {
    setName(currentDeck.name);
    setDescription(currentDeck.description);
  }, [setName, setDescription, currentDeck.description, currentDeck.name]);

  const handleSubmit = async (currentDeck) => {
    await updateDeck({ ...currentDeck, name, description });
    history.push(`/decks/${currentDeck.id}`);
    history.go(0);
  };
  console.log(currentDeck);
  return (
    Object.keys(currentDeck).length > 0 && (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{currentDeck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Deck
            </li>
          </ol>
        </nav>
        <h2>Edit Deck</h2>
        {name && (
          <DeckForm
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
          />
        )}
        <Link to={`/decks/${deckId}`}>
          <button type="button" className="btn btn-secondary mr-3">
            Cancel
          </button>
        </Link>
        <button
          type="button"
          className="btn btn-primary my-3"
          onClick={() => handleSubmit(currentDeck)}
        >
          Submit
        </button>
      </div>
    )
  );
}

export default EditDeck;
