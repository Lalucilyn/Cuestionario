import React, { Component } from 'react';
import '../styles/Result.css';

const Results = (props) => {
	return(
      <div id="results">
      	<h2>¡Partida finalizada!</h2>
      	<h3>Tu puntaje final es {props.score}/5</h3>
      	<div id="finalButtonWrap">
      	<input type="button" className="resultsButton restart" value="reiniciar" onClick={props.finish}/>
      	<input type="button" className="resultsButton newGame" value="nueva partida" onClick={props.finish}/>
        </div>
      </div>
	)

}

export default Results;
