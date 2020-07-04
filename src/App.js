import React from "react";

// components //
import { Header } from "./components/header";
import { Inptems } from "./components/input-items";

import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <div className="todo_count">
        <Header />
        <Inptems />
      </div>
    </div>
  );
};

export default App;
