import { useState, useEffect, useRef } from "react";
import "./styles.css";

function App() {
  const [trait, setTrait] = useState("");
  const [check, setCheck] = useState([]);
  const [details, setDetails] = useState({
    traits: [],
  }); // traits.push(trait)

  const [enteredText, setEnteredText] = useState("");

  const handleTrait = (e) => {
    setTrait(e.target.value);
  };
  const handleKey = (k) => {
    if (k.code === "Enter") {
      setCheck((prev) => [...prev, trait]);
      setDetails((prev) => ({
        ...prev,
        traits: check,
      }));
      k.target.value = "";
    }
  };
  useEffect(() => {}, [check]);

  return (
    <>
      <div className="container">
        <div className="input-container">
          <h1>Enter traits</h1>
          <input
            type="text"
            placeholder=""
            onChange={handleTrait}
            onKeyDown={handleKey}
          />
        </div>
        {details.traits.length >= 0 ? (
          <ul>
            {check.map((trait, index) => {
              return (
                <li key={index}>
                  <span>{trait}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
