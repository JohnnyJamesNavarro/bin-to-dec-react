import { useState } from "react";
import "./App.css";

function App() {
  const [inputBinNum, setInputBinNum] = useState("");
  const [outputDecNum, setOutputDecNum] = useState("");

  const handleInputBinChange = (e) => {
    const regex = /[^01]/gi;
    let inputValue = e.target.value;
    let filteredValue = inputValue.replace(regex, "");

    if (filteredValue.length < 9) {
      setInputBinNum(filteredValue);
      setOutputDecNum(parseBinToDec(filteredValue));
    }
  };

  const parseBinToDec = (bin) => {
    return parseInt(bin, 2);
  };

  return (
    <div className="App">
      <p className="Title">Binary-to-Decimal React App</p>
      <input
        className="Input"
        type="text"
        name="input-bin-number"
        id="input-bin-number"
        value={inputBinNum}
        onChange={handleInputBinChange}
      />
      <p className="BottomText">
        Binary Input:{" "}
        {inputBinNum === "" || isNaN(inputBinNum)
          ? "Please enter a number."
          : inputBinNum}
      </p>
      <p className="BottomText">
        Decimal Output:{" "}
        {outputDecNum === "" || isNaN(outputDecNum)
          ? "Please enter a number."
          : outputDecNum}
      </p>

      <a
        className="Link"
        href="https://github.com/JohnnyJamesNavarro"
        target="_blank"
        rel="noreferrer"
      >
        Johnny James Navarro
      </a>
    </div>
  );
}

export default App;
