import React, { useContext } from "react";
import { GameContext } from "./context/GameContext";
import ThemeSelector from "./components/ThemeSelector";
import WordDisplay from "./components/WordDisplay";
import LetterInput from "./components/LetterInput";
import AttemptsLeft from "./components/AttemptsLeft";
import HangmanFigure from "./components/HangmanFigure";
import "./index.css";

const App = () => {
  const { theme, restartGame, wordToGuess, guessedLetters, attempts } =
    useContext(GameContext);

  if (!theme) {
    return (
      <div className="app">
        <h1>Hangman Game</h1>
        <ThemeSelector />
      </div>
    );
  }

  const isGameWon = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameOver = attempts <= 0;

  return (
    <div className="app">
      <h1>Hangman Game</h1>
      <ThemeSelector />
      <HangmanFigure attempts={attempts} />
      <WordDisplay word={wordToGuess} guessedLetters={guessedLetters} />
      {!isGameWon && !isGameOver && <LetterInput />}
      <AttemptsLeft attempts={attempts} />
      {isGameWon && <p>Congratulations, you won!</p>}
      {isGameOver && !isGameWon && (
        <p>Game over, you lost! The word was: {wordToGuess}</p>
      )}
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

export default App;
