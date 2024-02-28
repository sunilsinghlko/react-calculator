import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let [calVal, setcalVal] = useState("");
  const onButtonClick = (btnText) => {
    if (btnText === "C") {
      setcalVal("");
    } else if (btnText === "=") {
      const res = eval(calVal);
      setcalVal(res);
    } else {
      const displayValue = calVal + btnText;
      setcalVal(displayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display calVal={calVal} />
      <Button onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
