import React, { useState } from "react";

const FishList = ({ fish, setFish }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("small");

  const addFish = () => {
    if (name) {
      setFish([...fish, { name, type }]);
      setName("");
    }
  };

  const removeFish = (index) => {
    setFish(fish.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4 fish-list">
      <h2>Rybičky</h2>
      <div className="form-group">
        <label>Jméno rybičky:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Druh rybičky:</label>
        <select
          className="form-control"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="small">Malá</option>
          <option value="large">Velká</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={addFish} disabled={!name}>
        Přidat rybičku
      </button>

      <table className="table table-striped table-bordered mt-4">
        <thead>
          <tr>
            <th className="text-center">Jméno</th>
            <th className="text-center">Druh</th>
            <th className="text-center">Akce</th>
          </tr>
        </thead>
        <tbody>
          {fish.map((f, index) => (
            <tr key={index}>
              <td className="text-center">{f.name}</td>
              <td className="text-center">
                {f.type === "small" ? "Malá" : "Velká"}
              </td>
              <td className="text-center">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFish(index)}
                >
                  Odebrat
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FishList;
