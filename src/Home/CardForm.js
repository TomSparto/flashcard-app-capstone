import React from "react";

function CardForm({ front, setFront, back, setBack }) {
  const handleFrontChange = (event) => {
    setFront(event.target.value);
  };
  const handleBackChange = (event) => {
    setBack(event.target.value);
  };
  return (
    <form className="d-flex flex-column">
      <label className="font-weight-bold" name="front" id="front">
        Front:
        <textarea
          style={{ width: "100%" }}
          value={front}
          placeholder="Front side of card."
          onChange={handleFrontChange}
        ></textarea>
      </label>
      <label className="font-weight-bold" name="back" id="back">
        Back:
        <textarea
          style={{ width: "100%" }}
          value={back}
          placeholder="Back side of card."
          onChange={handleBackChange}
        ></textarea>
      </label>
    </form>
  );
}

export default CardForm;
