import { useState } from "react";
import "./App.css";

function App() {
  const [inputBinNum, setInputBinNum] = useState();
  const [outputDecNum, setOutputDecNum] = useState();

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
      <h1>Binary-2-Decimal React App</h1>
      <input
        type="text"
        name="input-bin-number"
        id="input-bin-number"
        value={inputBinNum}
        onChange={handleInputBinChange}
      />
      <p>Bin Num: {inputBinNum}</p>
      <p>Dec Num: {outputDecNum}</p>
    </div>
  );
}

export default App;
