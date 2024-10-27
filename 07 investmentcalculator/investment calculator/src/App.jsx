import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:1,
    annualInvestment:1,
    expectedReturn:1,
    duration:1,
  });
  
  function handleChange(inputIdentifier,newvalue){
    setUserInput(prevUserInput=>{
        return {
            ...prevUserInput,
            [inputIdentifier]: +newvalue,
        };
    });
 }

 const inputIsValid=userInput.duration>=1;

  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    {!inputIsValid && <p>Please enter a duration greater than zero.</p>}
    {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
