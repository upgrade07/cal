import { useState } from "react";
import "./App.css";

function App() {
  const [ans, Setans] = useState(0);
  const [text1, Settext1] = useState(0);
  const [text2, Settext2] = useState(0);

  function onChangeHandler(e) {
    e.preventDefault();
    Settext1(e.target.value);
  }

  function onChangeHandler2(e) {
    e.preventDefault();
    Settext2(e.target.value);
  }

  function onAddHandler(e) {
    e.preventDefault();
    Setans(parseInt(text1) + parseInt(text2));
  }

  function onSubtractHandler(e) {
    e.preventDefault();
    Setans(text1 - text2);
  }

  function Multiply(num, b) {
    for (var i = 0; i < b - 1; i++) {
      num += parseInt(text1);
    }
    Setans(num);
  }

  function onMultiplyHandler(e) {
    e.preventDefault();
    Multiply(parseInt(text1), parseInt(text2));
    // console.log(text1)
    // Setans(text1)
  }

  function divide(dividend,divisor) {
    
    let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let quotient = 0;
    while (dividend >= divisor) {
      dividend -= divisor;
      ++quotient;
    }

    if (sign === -1) quotient = -quotient;
    return quotient.toFixed(2);
  }

  function onAbsoluteHandler(e) {
    e.preventDefault();
    if (text2.length > 0) {
      alert("Only 1 Integer allowed");
    }
    Setans(Math.abs(parseInt(text1)));
  }

  function onDivideHandler(e){
    e.preventDefault()
    Setans(divide(parseInt(text1),parseInt(text2)))
  }

  function clearText() {
    Settext1("");
    Settext2("");
  }

  return (
    <div className="App">
      <button style={{marginTop : "25px"}} className="button5" onClick={clearText}>CLEAR</button>
      <br></br>
      <div className="inputs">
      <input
        value={text1}
        onChange={onChangeHandler}
        type="number"
        placeholder="Number 1"
      ></input><br></br>
      <input
        value={text2}
        onChange={onChangeHandler2}
        type="number"
        placeholder="Number 2"
      ></input>
      </div>
      <div className="label"><p>Answer : {ans}</p></div>  
      <div className="buttons">
      <button onClick={onAddHandler}>Add</button>
      <button onClick={onSubtractHandler}>Subtract</button>
      <button onClick={onMultiplyHandler}>Multiply</button>
      <button onClick={onDivideHandler}>Divide</button>
      <button onClick={onAbsoluteHandler}>Absolute</button>
      </div>
    </div>
  );
}

export default App;
