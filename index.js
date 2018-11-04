let  readlineSync  =  require('readline-sync');;
let randomNumber = Math.round((Math.random() * 10));

let guess = readlineSync.question('Guess a number between 1 through 10');

if (guess == randomNumber){

 console.log('you guessed right!');

}  else {

  console.log ('Sorry. The number was ' + randomNumber + ' ');

}
