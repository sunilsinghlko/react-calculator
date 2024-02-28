import styles from "./Button.module.css";
function Button({ onButtonClick }) {
  const buttonNames = [
    "1",
    "2",
    "3",
    "C",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    "0",
    ".",
    "/",
    "*",
    "=",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((btn) => {
        return (
          <button className={styles.button} onClick={()=>onButtonClick(btn)}>
            {btn}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
