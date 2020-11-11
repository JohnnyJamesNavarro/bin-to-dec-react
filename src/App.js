import { useState } from "react";
import "./App.css";

function App() {
  const [inputBinNum, setInputBinNum] = useState(0);
  const [outputDecNum, setOutputDecNum] = useState(0);

  const handleInputBinChange = (e) => {
    setInputBinNum(e.target.value);
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
