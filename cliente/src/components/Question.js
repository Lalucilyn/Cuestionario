import React from 'react';
import '../styles/Question.css';

const Question = (props)=>{	
	const rightnessStyle = props.right===true?{"color":"darkgreen"}:{"color":"red"}	

return (<div id="question">
          <h2>{props.question}</h2>
          <div id="answers">
  	      {props.options.map(option=>
    	    <label htmlFor="option" key={option}>
      	    <input 
            type="radio" 
            name="option" 
            disabled={props.sent===true} 
            value={option} 
            onChange={props.change} />
            <span>{option}</span>
          </label>)}
        </div>
      </div>
    )
}
export default Question;

