import "./Title.css";
import React, { useEffect } from "react";

function Title() {

  let nombre = 'localhost:3000/?'
  document.title = nombre;

  function writeTitle(){
    let nombre2 = document.getElementById('text');
    if (nombre2 != "") {
      document.title = nombre2.value
    }
  }

  function resetTitle(){
    let nombre2 = 'localhost:3000/?'
    document.title = nombre2
  }

  return (
    <div className="TitleDefiner">
      <h3>Cambia el titulo de tu página!</h3>
      <input id="text"/>
      <button className="ButtonTitle" onClick={writeTitle}>DEFINIR TÍTULO</button>
      <button className="ButtonTitle" onClick={resetTitle}>RESETEAR TÍTULO</button>
    </div>
  );
}

export default Title;
