import { useCallback, useEffect, useState } from "react";
import "./App.css";
import HangmenAvatar from "./HangmenAvatar";
import HangmenKeyboard from "./HangmenKeyboard";
import HangmenWordPuzzle from "./HangmenWordPuzzle";
import wordList from "./assets/wordList.json";

function App() {
  const [mysteryWord, setMysteryWord] = useState<string>(
    wordList[Math.floor(Math.random() * wordList.length)]
  );
  const [clickedLetter, setClickedLetter] = useState<string[]>([]);

  const numberOfGuesses = clickedLetter.filter(
    (char) => !mysteryWord.includes(char)
  );

  const addGuessedLetter = useCallback(
    (char: string) => {
      if (clickedLetter.includes(char)) return;
      setClickedLetter((currentLetters) => [...currentLetters, char]);
    },
    [clickedLetter]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      addGuessedLetter(key);
      // setLetter(currentLetters => [...currentLetters, key])
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [clickedLetter]);

  const isLose = numberOfGuesses.length >= 6
  const isWin = mysteryWord.split('').every(char => clickedLetter.includes(char))

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <p style={{ fontWeight: "bold" }}> {isLose && "You lost, Refersh to try again"} {isWin && "You Won! , Referesh to play again"} </p>
      <HangmenAvatar numberOfGuesses={numberOfGuesses.length} />
      <HangmenWordPuzzle word={mysteryWord} guessedLetter={clickedLetter} />
      <div
        style={{
          alignSelf: "stretch"
        }}
      >
        <HangmenKeyboard
          isDisabled={isLose || isWin}
          mysteryWord={mysteryWord}
          clickedLetter={clickedLetter}
          setClickedLetter={setClickedLetter}
        />
      </div>
    </div>
  );
}

export default App;
