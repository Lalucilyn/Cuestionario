import React from 'react';
import '../styles/Question.css';

const Question = (props)=>{	
return (<div id="question">
  <h2>{props.question}</h2>
  <div id="answers">
  	{props.options.map(option=>
    	<label>
      		<input type="radio" name="question" key={option} value={option}/>
      		<span>{option}</span>
    	</label>)}
   </div>	

</div>)
}

export default Question;

