import React, { useState, useEffect } from "react";

const Aquarium = ({ fish }) => {
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const calculateVolume = (width, length, height) => {
      if (width > 0 && length > 0 && height > 0) {
        return (width * length * height) / 1000;
      }
      return 0;
    };

    const volume = calculateVolume(width, length, height);
    const requiredVolume = fish.reduce((total, f) => {
      return total + (f.type === "small" ? 10 : 20);
    }, 0);

    setIsValid(volume >= requiredVolume);
  }, [width, length, height, fish]);

  return (
    <div className="container mt-4 aquarium">
      <h2>Akvárium</h2>
      <div className="form-group">
        <label>Šířka (cm):</label>
        <input
          type="number"
          className="form-control"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Délka (cm):</label>
        <input
          type="number"
          className="form-control"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Výška (cm):</label>
        <input
          type="number"
          className="form-control"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button
        className={`btn btn-aquarium ${isValid ? "btn-success" : "btn-danger"}`}
        onClick={() => alert("Rozměry schváleny!")}
        disabled={!isValid}
      >
        Schválit rozměry
      </button>
    </div>
  );
};

export default Aquarium;
