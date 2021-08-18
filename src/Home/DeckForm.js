import React from "react";

function DeckForm({ name, setName, description, setDescription }) {
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  console.log(name);
  return (
    <form className="d-flex flex-column">
      <label className="font-weight-bold" name="name" id="name">
        Name:
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
  );
}

export default DeckForm;
