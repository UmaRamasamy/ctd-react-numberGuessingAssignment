import React, { useState } from "react";
import Button from "./Button";

// Functional Component
function GuessControl({ onGuess }) {
  const [currentGuess, setCurrentGuess] = useState('')

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value)
  }
  const onSubmitGuess = () => {
    onGuess(currentGuess)
    setCurrentGuess('');

  }

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );

}





export default GuessControl;
