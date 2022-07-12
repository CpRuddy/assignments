//callbacks and higher functions
const videos = [
  "pranking my sister",
  "how to javascript",
  "html turtorial",
  "learning the piano",
];
// videos.push("good morning")
// console.log(videos);
videos.forEach(function(video){
  console.log("run");
  console.log(video);
});
//forEach a higher order functiion, a higher order Function is a function that takes another function as a paramater

function repeater(fn){
  fn();
  fn();
  fn();
}
function sayHello() {
  console.log("Hello There!");

}
repe