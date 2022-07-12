//call your tags
const groceryInput = document.querySelector(".moms-input");
const groceryButton = document.querySelector(".grocery-button");
const groceryList = document.querySelector(".final-list");


//Event Listeners
document.addEventListener("DOMContentLoad", getGroceries);
groceryButton.addEventListener("click", addToList);
groceryList.addEventListener("click", deleteEdit);



//Functions
function addToList(event){
  event.preventDefault();
  //add to grocery div - "grocery"
  const groceryDiv = document.createElement("div");
  groceryDiv.classList.add("grocery");
  //create list item
  const newGrocery = document.createElement("li");
  newGrocery.innerText = groceryInput.value;
  newGrocery.classList.add("grocery-item");
  //grab grocery div and append new grocery
  groceryDiv.appendChild(newGrocery);
  saveLocal(groceryInput.value);
  //Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class= 'fa-solid fa-trash-can'></i>";
  deleteButton.classList.add("delete-button");
  //append it 
  groceryDiv.appendChild(deleteButton);
  const editButton = document.createElement("button");
  editButton.innerHTML = "<i class='fa-solid fa-pen'></i>";
  editButton.classList.add("edit-button");
  //append it 
  groceryDiv.appendChild(editButton);
  // //Append to ul list "grocery-list"
  groceryList.appendChild(groceryDiv);
  //Clear the Input Value after user submits
  groceryInput.value = "";
}

function deleteEdit(e){
  const item = e.target;
  if(item.classList[0] === "delete-button"){
    const removeEdit = item.parentElement;
    removeEdit.remove();
  } 
  
  // // if(item.classList[0] === "edit-button"){
  //   const removeEdit = item.parentElement;
  //   const newInput = document.createElement("input");
  //   newInput.type = "text"
  //   newInput.value = removeEdit.textContent;
  //   newGrocery.insertBefore(newInput, removeEdit);
    
  // }
}
function saveLocal(grocery){
  //create a check to see if i already have a grocery list in local
  let groceryCheck;
  if(localStorage.getItem("groceryCheck") === null){
    groceryCheck = [];
  }else{
    groceryCheck = JSON.parse(localStorage.getItem("groceryCheck"));
  }
  groceryCheck.push(grocery);
  localStorage.setItem("groceryCheck", JSON.stringify(groceryCheck));
}

function getGroceries(){
  let groceryCheck;
  if(localStorage.getItem("groceryCheck") === null){
    groceryCheck = [];
  }else{
    groceryCheck = JSON.parse(localStorage.getItem("groceryCheck"));
  }
  groceryCheck.forEach(function(grocery){
    const groceryDiv = document.createElement("div");
    groceryDiv.classList.add("grocery");
    //create list item
    const newGrocery = document.createElement("li");
    newGrocery.innerText = grocery;
    newGrocery.classList.add("grocery-item");
    //grab grocery div and append new grocery
    groceryDiv.appendChild(newGrocery);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<i class= 'fa-solid fa-trash-can'></i>";
    deleteButton.classList.add("delete-button");
    //append it 
    groceryDiv.appendChild(deleteButton);
    const editButton = document.createElement("button");
    editButton.innerHTML = "<i class='fa-solid fa-pen'></i>";
    editButton.classList.add("edit-button");
    //append it 
    groceryDiv.appendChild(editButton);
    // //Append to ul list "grocery-list"
    groceryList.appendChild(groceryDiv);
    });
}


