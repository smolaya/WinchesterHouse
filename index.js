let  readlineSync  =  require('readline-sync');;

let name = readlineSync.question ("What is your name?");

let start = readlineSync.question ( "Welcome to Winchester House " + name + ". Do you have what it takes to get out?" );

if (start === "yes") {
console.log( "Choose a room " + name );
} else {
  console.log ("Come back when you're ready for a challange...")
}



let option = readlineSync. question ( "Option:  room 1, room 2, room 3" );

switch(option) {
  case "room 1":
    console.log( "You got lucky! This is the room that holds the exit door! You've escaped Winchester House" );
    break;
  case "room 2":
    console.log( "Oh no! You've gotten locked in the room with no return!" );
    break;
  case "room 3":
    console.log( "The room has a window that leads to the garden, break it and see what happens!" );
    break;
  default:
    console.log( "Oh no, you got lost in Winchester House, please try again!" );

}
