//Preliminary
const h1 = document.createElement("h1")
h1.textContent = "Javascript made this!";
h1.className = "header";
document.getElementById("header").appendChild(h1);

const subTitle = document.createElement("p")
subTitle.innerHTML = '<span class="name">Connor</span> Wrote all this Javascript'
subTitle.className = "header"
document.getElementById("header").appendChild(subTitle);
// When reviewing ask if there is anything we can do to make it look more appealing (spacing)
//Also ask why we used a span class? for the the subtitle. Followed the directions,
//why use the innerHTML why not just subTitle.textContent.Like we did when creating the h1 element

//Bronze

document.getElementById("leftA").textContent = "Did you check the waves today?";
document.getElementById("rightA").textContent = "Yeah!";
document.getElementById("leftB").textContent = "Does it look fun?";
document.getElementById("rightB").textContent = "Absolutely not!";
//Added id's in the html to each conversation so that i could target them.





// Clear conversation 
// const clearMessage = document.getElementById("clear-button");
// const conversation = document.getElementsByClassList("message left", "message right");

// clearMessage.addEventListener("click", function() {
//   conversation.remove()
//  });

// console.log(clearMessage);

// const clearMessage = document.getElementsByClassName("messages");
// const myButton = document.getElementById("clear-button");
// myButton.addEventListener('click', function (e) {
//   //e.preventDefault()
//   for (let i = 0; i < message.length; i ++)
//   clearMessage.remove(i)
//   console.log("click me")
// });

let clearMessage = document.querySelector("#clear-button") 
let conversation = document.querySelectorAll(".messages")
clearMessage.addEventListener('click', function() {
  document.getElementById("rightB").textContent = "";
  document.getElementById("leftA").textContent = "";
  document.getElementById("rightA").textContent = "";
  document.getElementById("leftB").textContent = "";
});

//Notes find out why i couldnt target the specific content within the classes. also find out why when t
// conversation.remove() wasnt working