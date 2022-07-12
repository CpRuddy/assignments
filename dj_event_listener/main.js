var box = document.getElementById("funkyBox")

box.addEventListener("dblclick", function() {
  box.style.backgroundColor = "green"
});

box.addEventListener("mouseup", function() {
  box.style.backgroundColor = "yellow"
});

box.addEventListener("mousedown", function() {
  box.style.backgroundColor = "red"
});

box.addEventListener("mouseover", function() {
  box.style.backgroundColor = "blue"
});

document.addEventListener("wheel", function() {
  box.style.backgroundColor = "orange"
});