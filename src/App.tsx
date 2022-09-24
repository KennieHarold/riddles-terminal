import React from "react";
import "./App.css";
import { type, detectCommand } from "./utils";

function App() {
  return (
    <div
      className="App"
      onClick={() => {
        document.getElementById("texter")?.focus();
      }}
    >
      <div className="container">
        <div id="terminal">
          <p id="welcome-banner">
            Heey code breaker welcome to the console! Your friend Bruno is lost
            and stucked in the matrix and he needs his{" "}
            <a href="/artifact.png" target="_blank">
              artifact
            </a>{" "}
            in order he can return home. Can you help him? And by the way, the
            glitch leaves you an uncrackable riddle. Can you solve it? Once you
            cracked the riddle, the matrix will surely break I guess, actually I
            don't know what happens after but we'll see hehe. Please type
            command <span style={{ color: "blue" }}>start</span> to proceed or{" "}
            <span style={{ color: "blue" }}>help</span> if you lost somehow in
            your tracks. Goodluck code breaker!
          </p>
          <span id="before"></span>
        </div>
        <textarea
          id="texter"
          autoFocus
          onInput={type}
          onKeyUp={detectCommand}
        ></textarea>
        <div id="liner">
          <span id="typer"></span>
          <b className="cursor" id="cursor">
            █
          </b>
        </div>
      </div>
    </div>
  );
}

export default App;
