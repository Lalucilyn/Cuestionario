import React from 'react';
import Robot from './img/arobot.png'
import './Results.css';

const Results = (props) => {
  return(
    <div id="results">
      <h2>¡Partida finalizada!</h2>
      <figure>
      	<img src={Robot} alt="Caricatura de un robot"/>
      </figure>
      <h3>Tu puntaje final es {props.score}/5</h3>
      <div id="finalButtonWrap">
      	<input type="button" className="resultsButton restart" value="reiniciar" onClick={props.finish}/>
      	<input type="button" className="resultsButton  newGame" value="nueva partida" onClick={props.finish}/>
      </div>
    </div>
	)
}

export default Results;
