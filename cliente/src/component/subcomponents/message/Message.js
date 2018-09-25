import React from 'react';
import './MessageStyle.css';
const Message = (props)=>{	
	const rightnessStyle = props.right===true?{"color":"#00897b"}:{"color":"#d81b60"}	
  let getMessage =(props)=>{
    let message;
    switch(true){
      case props.error:message="¡Debes seleccionar una opción!";break;
      case props.sent&&props.right:message="¡Respuesta correcta! ¡Wiiiii!";break;
      case props.sent&&!props.right:message="¡Oh noes! ¡Respuesta incorrecta!";break;
      default:message=""
    }
    return message
  }
  return (<p className="questionResult" style={rightnessStyle}>{getMessage(props)}</p>)
}

export default Message;

