//**** Array Map Assignment ****

//1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
  return arr.map(function(num){
      return num * 2
  })
}

console.log(doubleNumbers([25, 15, 40])); // [4, 10, 200]


// 2) Take an array of numbers and make them strings
function stringItUp(arr){
  return arr.map(function(currentNumber){
      return String(currentNumber)
  })
}

console.log(stringItUp([2, 5, 100]))

//
function capitalizeNames(arr){
  return arr.map(function(currentUnFormattedName){
      // const nameLowerCase = currentUnFormattedName.toLowerCase();
      return currentUnFormattedName[0].toUpperCase() + currentUnFormattedName.substring(1).toLowerCase()
  })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));


function namesOnly(arr){
return arr.map(function(currentObjects){
  return currentObjects.name
  })
}
console.log(namesOnly([
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
]));

// Filter assignment

//1)  Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
  return arr.filter(function(allNumbers){
      if(allNumbers >= 5){
          return true
      }
  })
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//2) Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  return arr.filter(function(unfiltered){
      if(unfiltered % 2 === 0){
          return true
      }
  })
}
// test
console.log(evensOnly([3, 6, 8, 2]));

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(function(words){
      if(words.length < 5){
          return true
      }
  })
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.


function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter(function(trueMembers){
      if (trueMembers.member === true){
          return true
      }
  })
}
// test
console.log(peopleWhoBelongToTheIlluminati([
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true }
]));

function ofAge(arr){
  return arr.filter(function(allViewers){
      if(allViewers.age > 18){
          return true
      }
  })
}
// test
console.log(ofAge([
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
]));


// **** Sort Assignment ****

function leastToGreatest(arr) {
  return arr.sort(function(a, b){
    return a - b
  })
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

function greatestToLeast(arr) {
  return arr.sort(function(a, b){
    return b - a
  })
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

function lengthSort(arr) {
  return arr.sort(function(a, b){
    return a.length - b.length
  })
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

function alphabetical(arr) {
 return arr.sort(function(a, b){
    return a === b ? 0 : a > b ? 1 : -1;
 })
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));

function byAge(arr){
  return arr.sort(function(a, b){
    return a.age - b.age
  })
}

console.log(byAge([
  { name: "Quiet Samurai", age: 22 },
  { name: "Arrogant Ambassador", age: 100 },
  { name: "Misunderstood Observer", age: 2 },
  { name: "Unlucky Swami", age: 77 }
]));


// **** Array Reduce Assignment ****

function total(arr) {
  return arr.reduce(function(final, num){
    final += num
    return final
  })
}

console.log(total([1,2,3]));

// function stringConcat(arr) {
//   return arr.reduce(function(string, num){
//     string.concat(num)
//     return string
//   })
// }
//
// console.log(stringConcat([1,2,3]));
``
const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
]

function totalVotes(arr) {
  return arr.reduce(function (finalVote, voter) {
    if (voter.voted) {
      finalVote++
    }
    return finalVote

  }, 0)
}


console.log(totalVotes(voters))



const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(arr) {
  return arr.reduce(function(finalTotal, num){
    finalTotal = wishlist.price + num
  })
}


console.log(shoppingSpree(wishlist)); // 227005




// ****  Multiple Array Methods Part 1 ****

var peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82
  }
]

function sortedOfAge(arr){
  return arr.filter(currentPerson => currentPerson.age > 18)
            .sort((a, b) => a.lastName.localeCompare(b.lastName))
            .map(function(currentPerson) {
              return `<li>${currentPerson.firstName} is ${currentPerson.age}</li>`
            })
}

console.log('sorted people', sortedOfAge(peopleArray));
