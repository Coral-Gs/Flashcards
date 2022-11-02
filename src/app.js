/*Flashcards digitales con conceptos y definiciones de teoría
Cuando hago click 1 me muestra el concepto (0)
Cuando hago click 2 me muestra la definición (0)
Cuando hago click 3 me muestra el concepto (1)
Cuando hago click 4 me muestra la definición (1)
etc
*/

/* ACCEDE A LA PANTALLA DE CONTENIDO DE LA UD 1 DE SSII
 */

/* let UD1SSIIButton = document.querySelector("#ssii-button-go-ud1");
UD1SSIIButton.addEventListener("click", showSSIIUD1);

function showSSIIUD1() {
  let contentUD1 = document.querySelector("#container");
  contentUD1.innerHTML = `
  <body>
    <div class="container" id="container">
      <div class="flashcards-app">
        <h1>Flashcards Sistemas Informáticos</h1>
        <div class="subjects">
          <button id="ssii-button-ud1">¡Comenzamos!</button>
          <div>
            <a href="javascript:location.reload()" class="control-button"
              >Volver</a
            >
            <a href="/pages/ssii.html" class="control-button">Unidades</a>
            <a href="/index.html" class="control-button">Asignaturas</a>
          </div>
        </div>
        <script src="/src/app.js"></script>
      </div>
    </div>
  </body>`;
}

/* MUESTRA EL CONTENIDO DE UD1 DE SSII DEL ARCHIVO JSON EN EL BOTÓN PRINCIPAL
 */

var clicks = -1;
var buttonSSII1 = document.querySelector("#ssii-button-ud1");

fetch("./data-ssii.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const buttonText = data.reduce((acc, cur) => {
      for (let key in cur) {
        console.log(typeof key);
        console.log(cur[key]);
        if (key != "asignatura" && key != "unidad") {
          acc.push(cur[key]);
        }
      }
      return acc;
    }, []);
    function showContent() {
      clicks += 1;
      buttonSSII1.innerHTML = buttonText[clicks];
    }
    buttonSSII1.addEventListener("click", showContent);
  });

/* MUESTRA EL CONTENIDO DE UD1 DE BBDD DEL ARCHIVO JSON EN EL BOTÓN PRINCIPAL
 */

var buttonBBDD1 = document.querySelector("#bbdd-button-ud1");

fetch("./data-bbdd.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const buttonText = data.reduce((acc, cur) => {
      for (let key in cur) {
        console.log(typeof key);
        console.log(cur[key]);
        if (key != "asignatura" && key != "unidad") {
          acc.push(cur[key]);
        }
      }
      return acc;
    }, []);
    function showContent() {
      clicks += 1;
      buttonBBDD1.innerHTML = buttonText[clicks];
    }
    buttonBBDD1.addEventListener("click", showContent);
  });

/* MUESTRA EL CONTENIDO DE UD1 DE PROGRAMACIÓN DEL ARCHIVO JSON EN EL BOTÓN PRINCIPAL
 */

var buttonPGM1 = document.querySelector("#pgm-button-ud1");

fetch("./data-pgm.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const buttonText = data.reduce((acc, cur) => {
      for (let key in cur) {
        console.log(typeof key);
        console.log(cur[key]);
        if (key != "asignatura" && key != "unidad") {
          acc.push(cur[key]);
        }
      }
      return acc;
    }, []);
    function showContent() {
      clicks += 1;
      buttonPGM1.innerHTML = buttonText[clicks];
    }
    buttonPGM1.addEventListener("click", showContent);
  });
