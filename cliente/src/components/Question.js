import React from 'react';
import '../styles/Question.css';

const Question = (props)=>{	
	const rightnessStyle = props.right===true?{"color":"darkgreen"}:{"color":"red"}	

return (<div id="question">
  <h2>{props.question}</h2>
  <div id="answers">
  	{props.options.map(option=>
    	<label>
      		<input type="radio" name="question" key={option} value={option} onChange={props.change}/>
      		<span>{option}</span>
    	</label>)}
   </div>
   {props.sent && (
   	<p
   	className="questionResult"
   	style={rightnessStyle}>
   	{props.right?"¡Respuesta correcta! ¡Wiiiii!":"¡Oh noes! ¡Respuesta incorrecta!"}
   	</p>)}
    {props.error && (
   	<p
   	className="questionResult">
   	¡Debes seleccionar una opción!
   	</p>)}
</div>

)}

export default Question;

