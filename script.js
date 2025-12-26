function getComputerChoice(){
  const random = Math.random();
  if(random>=0.66)
    return 'rock';
  else if(random>=0.33)
    return 'paper';
  else return 'scissors';
}

const compPick=getComputerChoice();
console.log(compPick);

function getHumanChoice(){
 return window.prompt('Take your guess');
};

const humanPick=getHumanChoice();
console.log(humanPick);

const humanScore = 0;
const computerScore = 0;
let result;

function playRound(humanChoice, computerChoice){
 if(humanChoice.toLowerCase()=='scissors'){
  switch(computerChoice){
    case 'scissors':
      result='tie';
      break;
    case 'paper':
      result='win';
      break;
    case 'rock':
      result='loose';
      break;
  }
 }
 else if(humanChoice.toLowerCase()=='rock'){
  switch(computerChoice){
    case 'scissors':
      result='win';
      break;
    case 'paper':
      result='loose';
      break;
    case 'rock':
      result='tie';
      break;
  }
 }
 else if (humanChoice.toLowerCase()=='paper'){
  switch(computerChoice){
    case 'scissors':
      result='loose';
      break;
    case 'paper':
      result='tie';
      break;
    case 'rock':
      result='win';
      break;
  }
 }
 else{
  console.log('error')
 }

 console.log(`You picked ${humanChoice}, computer picked ${compPick}. You ${result}`);
}

playRound(humanPick, compPick);