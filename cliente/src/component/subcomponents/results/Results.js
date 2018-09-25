import React from 'react';
import Robot from './img/arobot.png'
import './ResultsStyle.css';

const Results = (props) => {
  return(
    <div id="results">
      <h2>¡Partida finalizada! ¡Iupiii!</h2>
      <div id="resultDisplay">


      <h3>De acuerdo con los cálculos de nuestro robot, tu puntaje final es {props.score}/5</h3>
            <figure>
        <img src={Robot} alt="Caricatura de un robot"/>
      </figure>
      </div>
      <div id="finalButtonWrap">
      	<input type="button" className="resultsButton restart" value="reiniciar" onClick={props.finish}/>
      	<input type="button" className="resultsButton  newGame" value="nueva partida" onClick={props.finish}/>
      </div>
    </div>
	)
}

export default Results;
