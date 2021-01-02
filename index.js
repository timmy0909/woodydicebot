console.log("El bot se está iniciando...");
console.log("Bot encendido.");

var Twit = require("twit");

var config = require("./config.js");

var T = new Twit(config);



/* var tweet = {
	status: "#botenpruebas"
}

T.post("statuses/update", tweet, tweeted);

function tweeted(err, data, response) {
	if (err) {
		console.log("Algo fue mal.")
	} else {
		console.log("Funcionó.");
	}
} */

	




setInterval(tweetIt, 4800000)

tweetIt();

function tweetIt(){
	
	var frases = ["Oigan todos, Bonnie hizo un amigo en clases.",
	"Oye, oye, que alguien lo atrape antes de que saque un ojo.",
	"Bonnie necesita a Forky.",
	"Quiero panuchos.",
  "Unas quesadillas, ama",
	"La vida no tiene sentido si no eres amado por un niño.",
	"¡Hay una serpiente en mi bota!",
	"Buzz, ¡estás volando!",
	"Ya quisieras Jessie, ya quisieras.",
	"Frutifantástico.",
	"Hay un amigo en ti.",
	"Hola hola holaaaa.",
	"Te amaba, Lotso. Te dio el cariño que un niño puede dar a un juguete.",
	"Canten conmigo!! Watanegui Consup...",
	"Buzz, mira ¡¡Un extraterrestre!!",
	"Mi vida es una pluma sin fondo...",
	"Se murió mi amigo bronco.",
	"Hasta que te conocí.",
	"Vamos al noanoa.",
	"Me gustas.",
	"Quiero jumex.",
  "Yo desayuno el peligro."];
	
	var tweet = {
		status: frases[Math.floor(Math.random() * frases.length)]
	}
  
  T.post("statuses/update", tweet, tweeted);

function tweeted(err, data, response) {
	if(err){
		console.log("Algo no va bien.")
	} else {
		console.log("Ha funcionado!!")
	}
}

}	




