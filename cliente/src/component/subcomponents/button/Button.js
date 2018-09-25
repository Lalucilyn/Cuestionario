import React from 'react';
import './ButtonStyle.css';

const Button = (props)=>{
	return 	(<div id="buttonWrap">
						{!props.sent
						? 
						<input 
							id="send" type="button" className="questionButton" value="responder" 
							onClick={props.answerInput}/>
						:
						<input id="next" type="button" className="questionButton" value="próxima pregunta" 
						onClick={props.nextInput}/>
						}
					</div>)
	}

export default Button;

