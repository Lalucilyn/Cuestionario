import React, { Component } from 'react';
import Question from './subcomponents/question/Question';
import Results from './subcomponents/results/Results'
import Button from './subcomponents/button/Button'
import Message from './subcomponents/message/Message'
import '../styles/Main.css';
import CurrentQuestions from './questions' //trae las preguntas

class Main extends Component {
  constructor(props){
    super(props) 
      this.initialState = {
        questions:"",
        current:0,
        sent:false,
        chosen:"",
        right:"",
        points:0,
      }
    this.state = this.initialState
  }
  
  //obtengo las preguntas y actualizo el state
  getQuestions = () => {
    const questions = CurrentQuestions.questions();
    return questions
  }

  componentDidMount(){
    const currentQuestions = this.getQuestions()
    this.setState({questions:currentQuestions})
  }

  /*************************************HANDLERS**************************************/
  
  //(radiobuttons de las opciones)
  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({chosen:e.target.value})
    console.log(this.state.questions)
  }
  
  //(botón "responder")
  handleAnswerInput = (e) => {
   const chosen = this.state.chosen;
   if(chosen===""){
    this.setState({error:true}); //valida que se halla clickeado una opción
    return
   }else{
     const right = this.state.questions[this.state.current].rightAnswer;
     chosen===right?this.setState({right:true}):this.setState({right:false})
     this.setState({sent:true, error:false})   
    }
  }

  //(botón "próxima pregunta")
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
  
  //(botones "reiniciar" y "nueva partida")
  handleFinishInput=(e)=>{
    const value = e.target.value;
    if(value==="nueva partida"){
      this.setState(this.initialState);
      this.setState({questions:this.getQuestions()});
    }else{
      this.setState({
        current:0,
        points:0,
        right:false
      })
    }
  }
 
  /******************************************RENDER******************************************/ 
  
  render() {
    const currentQuestion = this.state.questions[this.state.current]
   
    return (
      <div className="container">
        <header>
          <h1>Quiz: ¿Cuánto sabés sobre JavaScript? </h1>
        </header>
        <main>
          {this.state.current<this.state.questions.length
          ?
          <form type="post">
            <Question 
            question={currentQuestion.question} 
            options={currentQuestion.options} 
            change={this.handleInputChange.bind(this)}
            sent={this.state.sent}
            right={this.state.right}
            error={this.state.error}
            />
            <div>
            <Button 
            sent={this.state.sent}
            answerInput={this.handleAnswerInput.bind(this)} 
            nextInput={this.handleNextInput.bind(this)}
            />
            <Message
            error={this.state.error} 
            sent={this.state.sent} 
            right={this.state.right}/>
           </div>
           </form>
           :
           <Results 
           score={this.state.points} 
           finish={this.handleFinishInput.bind(this)}/>
          } 
        </main>    
      </div>
    )
  }
}

export default Main;
