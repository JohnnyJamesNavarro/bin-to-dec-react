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
      <p className="Output">
        Decimal Output:{" "}
        {outputDecNum === "" || isNaN(outputDecNum)
          ? "Please enter a number."
          : outputDecNum}
      </p>
    </div>
  );
}

export default App;
