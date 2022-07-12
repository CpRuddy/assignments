const readline = require("readline-sync")

let isGameStillRunning = true
let isKeyFound = false

const options = ["Put hand in hole", "Find the key", "Open the door"]


while(isGameStillRunning) {
let index = readline.keyInSelect(options, "Choose your move: ")
 if (options[index]==="Put hand in the hole") {
   console.log("You have died")
   isGameStillRunning = false
 }
 else if (options[index]==="Find the key") {
  console.log("You have found the key")
     isKeyFound = true
   }
 else if (options[index]==="Open the door") {

  if(isKeyFound === false) {
    console.log("You need to find the key")
  }
  else {
   console.log("You are free to leave")
   isGameStillRunning = false
 }
}
 else {
   console.log("Please make a selection")
 }
 }
