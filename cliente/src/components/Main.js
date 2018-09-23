import React, { Component } from 'react';
//Components
import Question from './Question';
import Results from './Results'
import Button from './Button'
import Message from './Message'
//Style
import '../styles/Main.css';
//Modules
import CurrentQuestions from './questions'


class Main extends Component {
  state = {
    questions:CurrentQuestions.questions,
    current:0,
    sent:false,
    chosen:"",
    right:"",
    points:0,
  }

  //Al iniciarse, se trae las preguntas del módulo importado
  getQuestions = () => {
    const questions = CurrentQuestions.questions;
    return questions
  }

  componentDidMount(){
    const currentQuestions = this.getQuestions()
    this.setState({questions:currentQuestions})
  }

  /*************************************HANDLERS**************************************/
  
  //Cuando se clickea un radiobutton, guarda el valor en el state
  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({chosen:e.target.value})
    console.log(this.state.questions)
  }
  
  //Cuando se presiona "responder" compara el valor seleccionado con la respuesta correcta
  handleAnswerInput = (e) => {
   const chosen = this.state.chosen;
   //Si no se clickeó nada, se actualiza el state para mostrar error y sale
   if(chosen===""){
    this.setState({error:true});
    return

   //Si no, se verifica si lo clickeado coincide con la respuesta correcta
   }else{
     const right = this.state.questions[this.state.current].rightAnswer;
     chosen===right?this.setState({right:true}):this.setState({right:false})
     this.setState({sent:true, error:false})   
    }
  }

 //Al presionar "próxima pregunta" actualiza this.state.current para que pase a la siguiente
 handleNextInput = (e) => {
    let current = this.state.current;
    current++
    let points = this.state.points;
    this.state.right&&points++

    this.setState({
      current:current,
      sent:false,
      chosen:"",
      right:false,
      points:points
    })
  }
  
  //Al presionar los botones del paso final, reinicia o refresca según corresponda
  handleFinishInput=(e)=>{
  const value = e.target.value;
  if(value==="nueva partida"){
    window.location.reload();
  }else{
  this.setState({
    current:0,
    sent:false,
    chosen:"",
    right:"",
    points:0,
  })}
  

  }

render() {
 const currentQuestion = this.state.questions[this.state.current]
 
 return (
   <div className="container">
     <header>
       <h1>
       Quiz: ¿Cuánto sabés sobre JavaScript? 
       </h1>
     </header>
     <main>

       {/*Si el contador de preguntas (this.state.current) no llegó a cinco, 
       va renderizando la que corresponda. Cuando llega a cinco, 
       muestra los resultados*/}
       {this.state.current<15
       ?
       <form type="post">
        
         <Question 
         question={currentQuestion.question} 
         options={currentQuestion.options} 
         change={this.handleInputChange}
         sent={this.state.sent}
         right={this.state.right}
         error={this.state.error}
         />
         <div>
         <Button 
         sent={this.state.sent}
         answerInput={this.handleAnswerInput} 
         nextInput={this.handleNextInput}
         />
         <Message
         error={this.state.error} 
         sent={this.state.sent} 
         right={this.state.right}/>
        </div>
        </form>
        :
        <Results score={this.state.points} finish={this.handleFinishInput}/>
       } 
     </main>    
   </div>
 );

}}
export default Main;
