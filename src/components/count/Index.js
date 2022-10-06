import "./Count.css";
import React, { useState } from "react";



function Count() {
  const [count, setCount] = useState(0);


  let comprove = ()=>{

    let p = document.getElementById('message');

    if(count === 10) {
      p.innerHTML = "Llegaste al número máximo!"
    } else if(count === 0) {
      p.innerHTML = "Llegaste al número mínimo!"
    } else if(count > -1 && count < 11){
      p.innerHTML = "";
    }
  }

  function limitMax(){
    setCount((prevCount) => prevCount + 1);
    comprove();
  };

  function limitMin(){
    setCount((prevCount) => prevCount - 1);
    comprove();
  };

  return (
    <div className="counterBox">
      <h3>El estado actual es: {count}</h3>
      <div className="counter">
        <button className="limit" onClick={limitMin} disabled={count <= 0} > - </button>
        <button className="number">{count}</button>
        <button className="limit" onClick={limitMax} disabled={count >= 10} > + </button>
        <button className="reset" onClick={() => setCount(0)}>RESET</button>
      </div>
      <p id="message"></p>
    </div>
  );
}

export default Count;

