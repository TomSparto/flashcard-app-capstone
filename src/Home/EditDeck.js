import React from "react";
import { Link, useHistory } from "react-router-dom";
import { updateDeck } from "../utils/api";

function EditDeck({ currentDeck, setCurrentDeck }) {
  const { name, description, id } = currentDeck;
  const history = useHistory();

  const handleNameChange = (event) => {
    setCurrentDeck({ ...currentDeck, name: event.target.value });
  };
  const handleDescriptionChange = (event) => {
    setCurrentDeck({ ...currentDeck, description: event.target.value });
  };
  const handleSubmit = async (currentDeck) => {
    await updateDeck(currentDeck);
    history.push(`/decks/${currentDeck.id}`);
    history.go(0);
  };
  return (
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
            Edit Deck
          </li>
        </ol>
      </nav>
      <h2>Edit Deck</h2>
      <form className="d-flex flex-column">
        <label className="font-weight-bold" name="name" id="name">
          Title:
          <input
            type="text"
            style={{ width: "100%" }}
            value={name}
            placeholder="Deck Name"
            onChange={handleNameChange}
          />
        </label>
        <label className="font-weight-bold" name="description" id="description">
          Description:
          <textarea
            style={{ width: "100%" }}
            value={description}
            placeholder="brief description of the deck"
            onChange={handleDescriptionChange}
          ></textarea>
        </label>
      </form>
      <Link to={`/decks/${id}`}>
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
  );
}

export default EditDeck;
