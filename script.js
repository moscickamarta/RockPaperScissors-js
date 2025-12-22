function getComputerChoice(){
  const random = Math.random();
  if(random>=0.66)
    return 'Rock';
  else if(random>=0.33)
    return 'Paper';
  else return 'Scissors';
}

const compPick=getComputerChoice();
console.log(compPick);
