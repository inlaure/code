import React, { useState, useCallback } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [isShown, setIsShown] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNINg");

  const toggleHandler = useCallback(() => {
    if (allowToggle) {
      setIsShown((prev) => !prev);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={isShown} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
