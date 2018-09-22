import React, { Component } from 'react';
import '../styles/Main.css';
import Question from './Question'
import CurrentQuestions from './questions'
import Robot from './arobot.png'
class Main extends Component {
  state = {
    questions:CurrentQuestions.questions,
    current:0,
    sent:false,
    chosen:"",
    right:"",
    points:0,
  }

  handleAnswerInput = (e) => {
   const chosen = this.state.chosen;
   const right = this.state.questions[this.state.current].rightAnswer;
   chosen===right?this.setState({right:true}):this.setState({right:false})
   this.setState({sent:true})   
  }

  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({chosen:e.target.value})
    console.log(this.state.questions)
  }

  handleNextInput = (e) => {
    let current = this.state.current;
    current++
    let points = this.state.points;
    this.state.right&&points++

    this.setState({
      current:current,
      sent:false,
      chosen:"",
      right:"",
      points:points
    })
  }

render() {
 const currentQuestion = this.state.questions[this.state.current]
 const rightnessStyle = this.state.right===true?{"color":"darkgreen"}:{"color":"red"}
 return (
   <div className="container">
     <header>
       <h1>
       Quiz: ¿Cuánto sabés sobre JavaScript? 
       </h1>
     </header>
     <main>
       <img src={Robot} alt="Imagen decorativa de un robot"/>
       <form type="post">
         <Question 
         question={currentQuestion.question} 
         options={currentQuestion.options} 
         change={this.handleInputChange}
         />
         {
          this.state.sent &&
          <span 
          className="questionResult" 
          style={rightnessStyle}>
          {this.state.right?"¡Respuesta correcta! ¡Wiiiii!":"¡Oh noes! ¡Respuesta incorrecta!"}
          </span>
         }
         {!this.state.sent
           ? 
           <input id="send" type="button" value="responder" onClick={this.handleAnswerInput}/>
           :
           <input id="next" type="button" value="próxima pregunta" onClick={this.handleNextInput}/>
         }
       </form> 
     </main>    
   </div>
 );

}}
export default Main;
