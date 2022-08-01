import { useState } from "react";
import but from "./but.png";

function Buttons(props) {

  function plus() {
    props.setCounter(props.counter + 3)
  }

  function minus () {
    if (props.counter >0) {props.setCounter(props.counter - 2)}
  }
  
  function reset() {
    props.setCounter(0)
  }

  return (
    <div className="button">
      <button className="plus" onClick={plus}>+</button>
      <button className="reboot" onClick={reset}>
        <img src={but} alt="but" />
      </button>
      <button className="minus" onClick={minus}>-</button>
    </div>
  );
}

export default Buttons;
