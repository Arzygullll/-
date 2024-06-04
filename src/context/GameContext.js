import { createContext, useState } from "react";

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [wordToGuess, setWordToGuess] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(6);

  const themes = {
    colors: ["red", "blue", "green", "yellow", "purple"],
    countries: ["canada", "france", "germany", "italy", "spain"],
    animals: ["elephant", "giraffe", "kangaroo", "lion", "tiger"],
  };

  const selectTheme = (theme) => {
    setTheme(theme);
    const words = themes[theme];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWordToGuess(randomWord);
    setGuessedLetters([]);
    setAttempts(6);
  };

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!wordToGuess.includes(letter)) {
        setAttempts(attempts - 1);
      }
    }
  };

  const restartGame = () => {
    selectTheme(theme);
  };

  return (
    <GameContext.Provider
      value={{
        theme,
        wordToGuess,
        guessedLetters,
        attempts,
        selectTheme,
        handleGuess,
        restartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
