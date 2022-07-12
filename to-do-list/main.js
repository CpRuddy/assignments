var removeItems = document.getElementsByClassName("btn-danger")
for (var i = 0; i < removeItems.length, i++) {
  var button = removeItems[i]
  button.addEventListener("click", function (event) {
    var buttonclicked = event.target
    buttonclicked.parentElement.parentElement.remove()

  })
}
//Removes Item

//Update our total price
//find what is is in the cart by how much

function updatedCartTotal(){
  var carItemContainer = document.getElementsByClassName("cart-items")
}














