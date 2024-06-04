import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import "./LetterInput.css";

const firstRow = "qwertyuiop".split("");
const secondRow = "asdfghjkl".split("");
const thirdRow = "zxcvbnm".split("");

const LetterInput = () => {
  const { handleGuess, guessedLetters } = useContext(GameContext);

  const renderRow = (row) => (
    <div className="letter-row">
      {row.map((letter) => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter)}
          className="letter-button"
        >
          {letter}
        </button>
      ))}
    </div>
  );

  return (
    <div className="letter-input">
      {renderRow(firstRow)}
      {renderRow(secondRow)}
      {renderRow(thirdRow)}
    </div>
  );
};

export default LetterInput;
