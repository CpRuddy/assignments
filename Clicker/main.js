
//Timer
var timeLeft = 30;
var time = document.getElementById("timer");

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft === 0) {
    clearTimeout(timerId);
    time.remove()
    button.remove()
    showResult()
  } else {
    time.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
};

//Button
let button = document.getElementById("click"),
  count = 0;
button.onclick = function(){
  count +=1;
  button.innerHTML = "Click me: " + count;
}

//Result function
function showResult(){
  let result = document.createElement("h4")
  result.textContent = "You clicked the button " + count + " times!"
  localStorage.setItem("clicksCount", count)
  document.getElementsByClassName("user-result")[0].append(result)
}

//Storage
function showButtonClickedPreviously(){

}