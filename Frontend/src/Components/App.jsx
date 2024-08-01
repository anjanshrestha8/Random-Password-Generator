import "../assets/css/components/input.css";
import "../assets/css/components/app.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [length, setLength] = useState("");
  const [password, setPassword] = useState("");
  const [isNumberChecked, setIsNumberChecked] = useState(false);
  const [isLowerChecked, setIsLowerChecked] = useState(false);
  const [isUpperChecked, setIsUpperChecked] = useState(false);

  async function generatePassword() {
    const data = await axios.post(
      "http://localhost:8080",
      {
        length: length,
        lowerIsChecked: isLowerChecked,
        numberIsChecked: isNumberChecked,
        upperIsChecked: isUpperChecked,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    setPassword(data.data);
  }
  return (
    <>
      <section className="app-section">
        <div>
          <h1>Random Password Generator</h1>
        </div>
        <div className="app-wrapper">
          <div className="input-wrapper">
            <input
              type="number"
              onChange={(event) => {
                setLength(event.target.value);
              }}
            />
            <div className="input">
              <input
                type="checkbox"
                onClick={() => {
                  setIsLowerChecked(!isLowerChecked);
                }}
              />
              <label>Must include Lower (a-z)</label>
            </div>
            <div className="input">
              <input
                type="checkbox"
                onClick={() => {
                  setIsUpperChecked(!isUpperChecked);
                }}
              />
              <label>Must include Upper (A-Z)</label>
            </div>
            <div className="input">
              <input
                type="checkbox"
                onClick={() => {
                  setIsNumberChecked(!isNumberChecked);
                }}
              />
              <label>Must include Number (0-9)</label>
            </div>
            <br />
            <br />
            <div className="button-wrapper">
              {" "}
              <button onClick={generatePassword}>Generate</button>
            </div>{" "}
          </div>
          <div className="output-wrapper">
            <h1>This is Random Password :</h1>
            <br />
            <input type="text" value={password} />
          </div>
        </div>
        <br />
        <div className="error">
          {length == ""
            ? "Please Enter the length of Password..................."
            : ""}
        </div>
      </section>
    </>
  );
}

export default App;
