//Leer y pintar datos de archivo JSON https://www.youtube.com/watch?v=M4LaQ3KUGOM

//#flashcards-sistemas

//Cuando hago click 1 me muestra el concepto (0)
//Cuando hago click 2 me muestra la definición (0)
//Cuando hago click 3 me muestra el concepto (1)
//Cuando hago click 4 me muestra la definición (1)

var clicks = 0;
var button = document.querySelector("#myButton");
var buttonText = [
  "Start",
  "Concept 1",
  "Definition 1",
  "Concept 2",
  "Definition 2",
  "Concept 3",
  "Definition 3",
  "And so on...",
];
function showContent() {
  clicks += 1;
  button.innerHTML = buttonText[clicks];
}
button.addEventListener("click", showContent);
