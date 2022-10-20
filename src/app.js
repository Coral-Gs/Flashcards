//Leer y pintar datos de archivo JSON https://www.youtube.com/watch?v=M4LaQ3KUGOM

//#flashcards-sistemas

//Cuando hago click 1 me muestra el concepto (0)
//Cuando hago click 2 me muestra la definición (0)
//Cuando hago click 3 me muestra el concepto (1)
//Cuando hago click 4 me muestra la definición (1)

var clicks = -1;
var button = document.querySelector("#ssii-button");

fetch("./data-ssii.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const buttonText = data.reduce((acc, cur) => {
      for (let key in cur) {
        console.log(typeof key);
        console.log(cur[key]);
        if (key != "asignatura") {
          acc.push(cur[key]);
        }
      }
      return acc;
    }, []);
    function showContent() {
      clicks += 1;
      button.innerHTML = buttonText[clicks];
    }
    button.addEventListener("click", showContent);
  });
