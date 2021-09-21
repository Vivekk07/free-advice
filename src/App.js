import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    setAdviceHandler();
  }, []);

  const setAdviceHandler = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="main">
      <div className="quote">
        <h1>{advice}</h1>
      </div>
      <div className="btn__div">
        <button className="btn" onClick={setAdviceHandler}>
          Fetch quote
        </button>
      </div>
    </div>
  );
}

export default App;
