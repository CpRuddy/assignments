var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    for(var i = 0; i < people.length; i++){
        people.concat(alphabet);
    }
    return people
  }
\