document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let newTask = document.getElementById("new-task-description").value;
    addToTodos(newTask);
  });
});

//add new task to id='tasks'
// function addToTodos(newTask) {
//   const tasks = document.getElementById("tasks");
//   let newLi = document.createElement("li");
//   // newLi.innnerText = newTask;
//   // tasks.appendChild(newLi);

//   // let xDiv = document.createElement("div");
//   // xDiv.style = 'inline'
//   let textDiv = document.createElement("div");
//   // textDiv.style = 'inline-block'
//   textDiv.innerText = newTask + ' X';

//   // xDiv.innerText = "X";
//   newLi.addEventListener("click", (event) => {
//     //if the click is on the div with the x
//     if ((event.target.innerText) == "X") {
//       event.currentTarget.remove();
//     }
//     //otherwise, return
//   });
//   newLi.append(textDiv);
//   tasks.appendChild(newLi);

//   document.querySelector("form").reset();
// }
// Idea is basically giving every name an id and removing them by id on button click.

// Updated fiddle

// this gives every li an id and adds a button with removeName('itemid') on it's onClick attribute.

// entry.setAttribute('id','item'+lastid);
// var removeButton = document.createElement('button');
// removeButton.appendChild(document.createTextNode("remove"));
// removeButton.setAttribute('onClick','removeName("'+'item'+lastid+'")');
// entry.appendChild(removeButton);

// removeName function simply finds item and remove it from the list.

// function removeName(itemid){
//     var item = document.getElementById(itemid);
//     list.removeChild(item);
// }

// EDIT: As to why zozo's answer would cause problems: it allows you to add multiple items with same id. I explained in a comment on their answer.

// EDIT

function addToTodos(newTask) {
  const tasks = document.getElementById("tasks");
  let newLi = document.createElement("li");

  // let xDiv = document.createElement("div");
  // xDiv.style = 'inline'
  let textDiv = document.createElement("div");
  // textDiv.style = 'inline-block'
  textDiv.innerText = newTask;
  let deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Remove"));

  // xDiv.innerText = "X";
  newLi.addEventListener("click", (event) => {
    //if the click is on the div with the x
    if (event.target == deleteButton) {
      event.currentTarget.remove();
    }
    //otherwise, return
  });
  newLi.append(textDiv, deleteButton);
  tasks.appendChild(newLi);

  document.querySelector("form").reset();
}
