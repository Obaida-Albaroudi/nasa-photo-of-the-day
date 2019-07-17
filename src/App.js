import React from "react";
import "./App.css";
import Data from "./data.js"

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      {<Data/>}
    </div>
  );
}

export default App;
