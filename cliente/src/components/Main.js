import React, { Component } from 'react';
import '../styles/Main.css';
import Question from './Question'
import questions from './questions'
import Robot from './arobot.png'
class Main extends Component {
  state = {
    questions:questions.ChosenQuestions,
    current:0
  }

  handleAnswerInput = (e) => {

  }

render() {

//Mezcla la opción correcta con las incorrectas para su impresión en pantalla
let schuffleOptions = () =>{ 
  const currentQuestion=this.state.current;
  const wrongs = this.state.questions[currentQuestion].wrongAnswers
  const arrayOptions = [...wrongs, this.state.questions[currentQuestion].rightAnswer];
  const schuffledOptions = questions.schuffle(arrayOptions)
  return schuffledOptions
}

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
        question={this.state.questions[this.state.current].question} 
        options={schuffleOptions()} 
        />
        <input type="button" value="responder"/>
      </form> 
    </main>    
  </div>
);
}
}

export default Main;
