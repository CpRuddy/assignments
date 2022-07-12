// 1. Write a for loop that prints to the console the numbers 0 through 9.
// 2. Write a for loop that prints to the console 9 through 0.
// 3. Write a for loop that prints these fruits to the console.`const fruit = ["banana", "orange", "apple", "kiwi"]`
for (var i = 0; i <= 9; i++){
  console.log(i)
}
for (var i = 9; i > 0; i--){
  console.log(i)
}
const fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++){
  console.log(fruit[i])
}

// 1. Write a for loop that will push the numbers 0 through 9 to an array.
// 2. Write a for loop that prints to the console only even numbers 0 through 100.
// 3. Write a for loop that will push every other fruit to an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]`

for (var i = 0; i <= 100; i++){
  if (i % 2 === 0){
      console.log(i)
  }
}

var myArray = [];

for (var i = 0; i <= 9; i++){
    myArray.push(i)
}
console.log(myArray)

let fruitArr = []

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (var i = 0; i < fruit.length; i+=2){
  fruitArr.push(fruit[i])

}
console.log(fruitArr)


// 1. Write a loop that will print out all the names of the people of the people array
// 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".

// const names = []
// const occupation = []
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

for ( var i = 0; i < peopleArray.length; i++){
   console.log(peopleArray[i].name);
  names.push(peopleArray[i].name);
  occupation.push(peopleArray[i].occupation);



console.log(names)
console.log(occupation)

for (var i = 0; i < peopleArray.length; i += 2) {
  names.push(peopleArray[i].name);
  occupation.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupation);





// function newNames(arr){
//   const names = []
//   for( var i = 0; i < arr.length; i += 2){
//    names.push(arr[i].name); 
//   } 
//   return names
// }
// console.log(newNames(peopleArray));