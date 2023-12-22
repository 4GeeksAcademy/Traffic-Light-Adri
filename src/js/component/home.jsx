import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState();
  const [bailando, setBailando] = useState(false);

  const handleDanceClick = () => {
    setBailando(!bailando);
  };

  const handleRandomLightClick = () => {
    const colors = ["red", "yellow", "green"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div className="container">
      <div className="palo d-flex justify-content-center"></div>
      <div className="semaforo">
        <h1
          onClick={() => setColor("red")}
          className={`circulo ${color === "red" ? "selected" : ""} ${
            bailando ? "bailando" : ""
          }`}
          id="red"
        ></h1>
        <h1
          onClick={() => setColor("yellow")}
          className={`circulo ${color === "yellow" ? "selected" : ""} ${
            bailando ? "bailando" : ""
          }`}
          id="yellow"
        ></h1>
        <h1
          onClick={() => setColor("green")}
          className={`circulo ${color === "green" ? "selected" : ""} ${
            bailando ? "bailando" : ""
          }`}
          id="green"
        ></h1>
      </div>
      <div className="container d-flex justify-content-evenly mt-5 p-5">
        <button className="btn btn-primary w-25" onClick={handleDanceClick}>
          Dance
        </button>
        <button
          className="btn btn-primary w-25"
          onClick={handleRandomLightClick}
        >
          RandomLigth
        </button>
      </div>
    </div>
  );
};

export default Home;
