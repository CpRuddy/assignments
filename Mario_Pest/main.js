const form = document["mario-bill"]

//submit event

form.addEventListener("submit", function(event){
  event.preventDefault()

  const goomba = form.goomba.value * 5
  const bobomb = form.bobomb.value * 7
  const boo = form.boo.value * 11
  const koopa = form.koopa.value * 15
  form.goomba.value = ""
  form.bobomb.value = ""
  form.boo.value = ""
  form.koopa.value = ""
  let totalBill = goomba + bobomb + boo + koopa // This is the total amount that you would owe
  
  const li = document.createElement("li")
  li.textContent = "You owe "+ totalBill + " Coins"
  document.getElementsByClassName("pest-list")[0].append(li)
totalBill = ""
})