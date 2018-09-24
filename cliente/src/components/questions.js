const self = {};

//Función auxiliar para mezclar
const schuffle = (items) => {
	for(let i=0;i<items.length;i++){
		let randomNumber = Math.floor(Math.random()*items.length)
		let save = items[i]
		items[i]=items[randomNumber]
		items[randomNumber]=save
	}
  return items
}

//Creo el array de preguntas
const createQuestions = () => {
  let questions = [
	{
		question:"¿Dentro de qué elemento del HTML se puede incluir código JavaScript?",
		rightAnswer:"<script>",
		wrongAnswers:["<js>","<javascript>","<scripting>"]
	},
	{
		question:"¿Qué método se utiliza para agregar items al final de un array?",
		rightAnswer:"push()",
		wrongAnswers:["shift()","unshift()","pop()"]
	},
	{
		question:"¿Cuál es el código correcto para escribir 'hola mundo' en un alert?",
		rightAnswer:"alert('Hello World');",
		wrongAnswers:["msgBox('Hello World');","alertBox('Hello World');","msg('Hello World');"]
	},
	{
		question:"¿Cómo se escribe un condicional para el caso de que 'i' sea distinto a 5?",
		rightAnswer:"if(i != 5)",
		wrongAnswers:["if i <> 5","if (i <> 5)","if i =! 5 then"]
	},
	{
		question:"¿Cuál de estas formas de iniciar un bucle con 'for' es correcta?",
		rightAnswer:"for (i = 0; i <= 5; i++)",
		wrongAnswers:["for i = 1 to 5","for (i = 0; i <= 5)","for (i <= 5; i++)"]
	},
	{
		question:"Cómo se puede comentar una línea en JavaScript?",
		rightAnswer:"//de este modo",
		wrongAnswers:["<!--de este modo-->","//de este modo//","'de este modo"]
	},
	{
		question:"¿Cómo se pueden comentar varias líneas a la vez en JavaScript?",
		rightAnswer:"/*de este modo*/",
		wrongAnswers:["*de este modo*","//de este modo","<!--de este modo-->"]
	},
	{
		question:"¿Cuál de los siguientes modos de escribir un array es correcto?",
		rightAnswer:'let gatos = ["Garfield", "Felix", "Salem"]',
		wrongAnswers:['let gatos = "Garfield", "Felix"," Salem"','let gatos = (1:"Garfield", 2:"Felix", 3:"Salem")','let gatos = 1 = ("Garfield"), 2 = ("Felix"), 3 = ("Salem")']
	},
	{
		question:"¿Cuál de las siguientes es la forma correcta de redondear 7.5 al entero más cercano?",
		rightAnswer:"Math.round(7.25)",
		wrongAnswers:["Math.rnd(7.25)","round(7.25)","rnd(7.25)"]
	},
	{
		question:"¿Cuál de los siguientes operadores se utiliza para asignar un valor a una variable?",
		rightAnswer:"=",
		wrongAnswers:["-","+","*"]
	},
	{
		question:"¿Qué retornará el siguiente código: Boolean(10>9)",
		rightAnswer:"true",
		wrongAnswers:["false","null","undefined"]
	},
	{
		question:"¿Cuál de los siguientes métodos quita el último elemento de un array y lo retorna?",
		rightAnswer:"pop()",
		wrongAnswers:["last()","get()","splice()"]
	},
	{
		question:"¿Cuál de los siguientes métodos quita el primer elemento de un array y lo retorna?",
		rightAnswer:"shift()",
		wrongAnswers:["pop()","splice()","get()"]
	},
	{
		question:"¿Cuál de las siguientes opciones imprimirá 'hello world' en la consola?",
		rightAnswer:"console.log('hello world')",
		wrongAnswers:["document.write('hello world')","system.out.printin('hello world')","printin('hello world')"]
	},
	{
		question:"¿Qué retorna el método find()?",
		rightAnswer:"El valor del primer elemento de un array que cumpla una condición dada",
		wrongAnswers:["Un array nuevo con todos los elementos que cumplan una condición dada","El índice del primer elemento de un array que cumpla con una condición dada","Ninguna de las opciones es correcta"]
	}
	];
  return questions
}

//Recorto el array, agrego las opciones mezcladas aleatoriamente y devuelvo las preguntas
const ChooseQuestions = () => {
  let questions = createQuestions();
  schuffle(questions).splice(0,10)
  questions.map(question=>{
	  const arrayAnswers=[...question.wrongAnswers,question.rightAnswer];
	  question.options = schuffle(arrayAnswers);
	  console.log(questions)
  })
  return questions
}

//Guardo en objeto y exporto
self.questions = ChooseQuestions

console.log(self.questions)
export default self;
