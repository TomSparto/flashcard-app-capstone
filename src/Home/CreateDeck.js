import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";

function CreateDeck({ decks }) {
  const [title, setTitle] = useState("");
  console.log(title);
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async () => {
    await createDeck({
      name: title,
      description: description,
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
      <form className="d-flex flex-column">
        <label className="font-weight-bold" name="title" id="title">
          Title:
          <input
            type="text"
            style={{ width: "100%" }}
            value={title}
            placeholder="Deck Name"
            onChange={handleTitleChange}
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
