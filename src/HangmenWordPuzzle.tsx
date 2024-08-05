const HangmenWordPuzzle = ({ word, guessedLetter }: { word: string, guessedLetter: string[] }) => {

  return (
    <div
      style={{
        display: "flex",
        gap: ".25rem",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: "3rem"
      }}
    >
      {word.split("").map((letter, index) => (
        <div
          key={index}
          style={{
            borderBottom: "2px solid black"
          }}
        >
          <div style={{ visibility: guessedLetter.includes(letter) ? "visible" : "hidden"
          }}>
            {" "}
            {letter}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HangmenWordPuzzle;
