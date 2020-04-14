var input = document.querySelector(".input_task");
var addButton = document.querySelector(".add_button"); 
var taskList = document.querySelector(".task_list");

function addNewElement(text){
  var newElement = document.createElement("li");
  var deleteElement = document.createElement("div");
  newElement.className = "list_element";
  deleteElement.className = "test_delete";
  newElement.textContent = text;
  newElement.appendChild(deleteElement);
  deleteElement.addEventListener("click", function(){
    taskList.removeChild(newElement);
  });
  taskList.appendChild(newElement);
  input.value = "";
}

addButton.addEventListener("click", function(event){
  event.preventDefault();
  if(!(input.value === "")){
    addNewElement(input.value);
  }
});
input.addEventListener("focus", function(){
  if(input.value === ""){
    input.value = "";
  }
  else {
    return input.value;
  }
});
//input.addEventListener("blur", function(){
  //if(input.value === ""){
  
  //}
//});