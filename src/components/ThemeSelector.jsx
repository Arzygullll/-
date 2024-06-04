import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";

const ThemeSelector = () => {
  const { selectTheme } = useContext(GameContext);
  const [showThemes, setShowThemes] = useState(false);

  const themes = ["colors", "countries", "animals"];

  const handleThemeClick = (theme) => {
    selectTheme(theme);
    setShowThemes(false);
  };

  return (
    <div>
      <button onClick={() => setShowThemes(!showThemes)}>Select a Theme</button>
      {showThemes && (
        <div>
          {themes.map((theme) => (
            <button key={theme} onClick={() => handleThemeClick(theme)}>
              {theme}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
