const choises = ["rock", "paper", "scissors", "lizard", "spock"];

const rules = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
};

const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

const play = (userChoice) => {
  if (!choices.includes(userChoice)) {
    console.log(`Invalid choice: "${userChoice}". Use: ${choices.join(", ")}`);
    return;
  }

  const computerChoice = randomChoice(choices);

  console.log("User chose:", userChoice);
  console.log("Computer chose:", computerChoice);

  if (userChoice === computerChoice) return console.log("Draw");

  const userWins = rules[userChoice].includes(computerChoice);
  console.log(userWins ? "You win!" : "Computer wins!");
};

play("lizard");

