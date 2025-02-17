import React, { useState } from "react";
import FishList from "./Components/FishList";
import Aquarium from "./Components/Aquarium";
import "./App.css";

const App = () => {
  const [showFishList, setShowFishList] = useState(true);
  const [fish, setFish] = useState([
    { name: "Nemo", type: "small" },
    { name: "Dory", type: "small" },
    { name: "Marlin", type: "large" },
    { name: "Bubbles", type: "large" },
  ]);

  const handleToggle = () => {
    setShowFishList(!showFishList);
  };

  return (
    <div className="app-container">
      <div className="container mt-5">
        <div className="text-center mb-4">
          <button
            className={`btn ${
              showFishList ? "btn-secondary" : "btn-primary"
            } mr-2`}
            onClick={() => setShowFishList(true)}
          >
            Přejít na Rybičky
          </button>
          <button
            className={`btn ${
              showFishList ? "btn-primary" : "btn-secondary"
            } ml-2`}
            onClick={() => setShowFishList(false)}
          >
            Přejít na Akvárium
          </button>
        </div>
        <div className="content">
          {showFishList ? (
            <FishList setFish={setFish} fish={fish} />
          ) : (
            <Aquarium fish={fish} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
