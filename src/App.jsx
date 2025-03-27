import { useState } from "react";

import Header from "./componentes/Header.jsx";
import UserInput from "./componentes/UserInput.jsx";
import Results from "./componentes/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 1,
    });

  const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
      setUserInput((prevUserInput) => {
        return {
          ...prevUserInput,
          [inputIdentifier]: +newValue,
        };
      });
    }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
