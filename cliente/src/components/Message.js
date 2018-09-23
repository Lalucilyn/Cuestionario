import React from 'react';
import '../styles/Message.css';
const Message = (props)=>{	
	const rightnessStyle = props.right===true?{"color":"darkgreen"}:{"color":"red"}	
  let getMessage =()=>{
    let message;
    switch(true){
      case props.error:message="¡Debes seleccionar una opción";break;
      case props.sent&&props.right:message="¡Respuesta correcta! ¡Wiiiii!";break;
      case props.sent&&!props.right:message="¡Oh noes! ¡Respuesta incorrecta!";break;
      default:""}
      return message
  }
return (<p className="questionResult"
   	    style={rightnessStyle}>
       {getMessage()}
   	</p>
    )}


export default Message;

