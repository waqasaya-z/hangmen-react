import styles from "./Keyboard.module.css";

const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const HangmenKeyboard = ({
  isDisabled = false,
  mysteryWord,
  clickedLetter,
  setClickedLetter,
}: {
  isDisabled: boolean,
  mysteryWord: string;
  clickedLetter: string[];
  setClickedLetter: React.Dispatch<React.SetStateAction<string[]>>;
}) => {

  const getButtonColor = (alphabet: string) => {
    if (clickedLetter.includes(alphabet)) {
      return mysteryWord.includes(alphabet) ? 'lightgreen' : 'white';
    }
    return 'white'; 
  };

  return (
    <div
      style={{
        width: "650px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(80px,1fr))",
        gap: "0.3rem",
        cursor: "pointer"
      }}
    >
      {alphabets.map((alphabet, index) => (
        <button
          className={`styles.btn`}
          value={alphabet}
          onClick={() => setClickedLetter([...clickedLetter, alphabet])}
          key={index}
          disabled={clickedLetter.includes(alphabet) || isDisabled}
          style={{
            display: "flex",
            border: "1.5px solid black",
            padding: "12px",
            textTransform: "uppercase",
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: getButtonColor(alphabet)
          }}
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
};

export default HangmenKeyboard;
