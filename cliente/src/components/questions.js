const self = {};
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
	question:"¿Cuál es la forma correcta de escribir un condicional que se ejecute en caso que 'i' sea distinto de 5?",
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
	rightAnswer:'let dinosaurios = ["Tiranosaurio", "Velocirraptor", "Apatosaurio"]',
	wrongAnswers:['let dinosaurios = "Tiranosaurio", "Velocirraptor"," Apatosaurio"','let dinosaurios = (1:"Tiranosaurio", 2:"Velocirraptor", 3:"Apatosaurio")','let dinosaurios = 1 = ("Tiranosaurio"), 2 = ("Velocirraptor"), 3 = ("Apatosaurio")']
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
	question:"¿Cuál de los siguientes métodos quita el último elemento de un array y retorna dicho elemento?",
	rightAnswer:"pop()",
	wrongAnswers:["last()","get()","splice()"]
},
{
	question:"¿Cuál de los siguientes métodos quita el primer elemento de un array y retorna dicho elemento?",
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

questions.map((question,index)=>question.number=index);

const schuffle = (items) => {
	for(let i=0;i<items.length;i++){
		let randomNumber = Math.floor(Math.random()*items.length)
		let save = items[i]
		items[i]=items[randomNumber]
		items[randomNumber]=save
	}
    return items
}

let ChosenQuestions = schuffle(questions)
console.log(ChosenQuestions)
ChosenQuestions.map(question=>{
	console.log(question.wrongAnswers)
	console.log(question.rightAnswer)
	const arrayAnswers=[...question.wrongAnswers,question.rightAnswer];
	question.options = schuffle(arrayAnswers);
})
console.log(ChosenQuestions)

self.questions = ChosenQuestions;

export default self;

//vas a hacer el schuffle de opciones acá y mandarlo directamente armado al state