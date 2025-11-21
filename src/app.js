const choises = ["rock", "paper", "scissors", "lizard", "spock"];

const rules = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
};

const jugar = (userChoise) => {
  function getRandomNumber(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }
  const computerChoise = getRandomNumber(0, 4)
  const eleccion = choises[computerChoise];

  console.log("User chose:", userChoise);
  console.log("Computer chose:", eleccion);

    if (userChoise === eleccion){
      console.log("Draw");
    }
    else if (rules[userChoise].includes(eleccion)){
      console.log("You win!");
    }
    else {
      console.log("Computer Wins!");
    }
}


jugar("lizard");

