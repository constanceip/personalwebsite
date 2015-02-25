  var taskInput = document.getElementById("new-name");
  var addButton = document.getElementsByTagName("button")[0]; 
  var rosterNames = document.getElementById("roster_names");


  var createNewTaskElement = function(taskString) {

    var listItem = document.createElement("li");

    var label = document.createElement("label");
    var editInput = document.createElement("input"); 

    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    
    
    editInput.type = "text";
    
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    
    label.innerText = taskString;
    

    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
  }

  var addTask = function() {
    var listItem = createNewTaskElement(taskInput.value);
    rosterNames.appendChild(listItem);
  
  }


// mad libs

var button = document.getElementById("lib-button");
        button.onclick = function (e){
        makeMadLib();
        }
function makeMadLib () {
var animal = document.getElementById("animal").value;
var superlative = document.getElementById("superlative").value;
var bodypart = document.getElementById("bodypart").value;
var adjective = document.getElementById("adjective").value;
var noun = document.getElementById("noun").value;
var adjective2 = document.getElementById("adjective2").value;
var noun2 = document.getElementById("noun2").value;
var adjective3 = document.getElementById("adjective3").value;
var story = document.getElementById("story");
var madlib = "The Lord of " + animal + " is the " + superlative + " of all the Lords in the Kingdom. His " + bodypart + " is " + adjective + " and his grand " + noun + " is " + adjective2 + ". He loves to feast on " + noun2 + " and you must be very " + adjective3 + " around him."
          story.innerHTML = madlib;}


