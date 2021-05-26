var $newTask = $("#new-task");
var $incompletedTasks = $("#incomplete-tasks");
var $completedTasks = $("#completed-tasks");
var $addButton = $("#add-button");

//%%%%%%%%%%%%%%%%%%% For new list item %%%%%%%%%%%%%%//
var makeNewListItem = function(taskToAdd) {

  var $newListItem = $("<li></li>");
  var $newCheckbox = $("<input type='checkbox' class='checkbox'>");
  var $newLabel = $("<label></label>");
  var $newEditInput = $("<input type='text' class='edit-text'>");
  var $newEditButton = $("<button class='edit-button'><i class='fas fa-edit'></i></button>");
  var $newDeleteButton = $("<button class='delete-button'><i class='fas fa-trash-alt'></i></button>");

  $newListItem.append($newCheckbox)
  .append($newLabel.html(taskToAdd))
  .append($newEditInput)
  .append($newEditButton)
  .append($newDeleteButton);

  return $newListItem;
}

// %%%%%%%%%%%%%%%%%%% add new list item when + is clicked.%%%%%%%%%%%//
// $addButton.on( "click", function(){
// var listItemToAdd = makeNewListItem($newTask.val());
//   $incompletedTasks.append(listItemToAdd);
//   $newTask.val("");
// })

var ul = document.getElementById('incomplete-tasks');
var li;
var addButton = document.getElementById('add-button')
addButton.addEventListener("click", addItem);

function addItem() {
    var input = document.getElementById('new-task');
    var item = input.value;
    var textNode = document.createTextNode(item);
    if (item === '') {
        msg = "Please Enter List Items!";
        alert(msg);
        return false;

    } else {
        var listItemToAdd = makeNewListItem($newTask.val());
          $incompletedTasks.append(listItemToAdd);
  
          $newTask.val("");}}
   
//%%%%%%%%%%%%%% remove a task when the delete button is clicked %%%%%%%%%%%%%%%%%%%%%%%//

$incompletedTasks.on( "click", ".delete-button", function(){
  $(this).parent().remove();  
})

//%%%%%%%%%%%%%%%%%%%% remove a task from the "Completed" list %%%%%%%%%%%%%%%%%%%%//
$completedTasks.on( "click", ".delete-button", function(){
  $(this).parent().remove();  
})

//%%%%%%%%%%%%%%%%%%%%%%% edit tasks %%%%%%%%%%%%%%%%%%%%%%%%%//

var editTask = function (list, input, label){

 //%%%%%%%%%%%%%%%%%% edit mode %%%%%%%%%%%%%%%%%%//

  if (list.addClass("editMode")) {
    list.removeClass("editMode");
   
    label.text(input.val());
  } else {
    
    list.addClass("editMode");
    input.val(label.text());
  }
}

//%%%%%%%%%%%%%%%%%%%%%  clicked on the "edit button" in the "To-Do" list %%%%%%%%%%%%%%%%%%%%//
$incompletedTasks.on( "click", ".edit-button", function(){

  var $list = $(this).parent();  
  var $input = $(this).prev();
 
  var $label = $input.prev();
  editTask($list, $input, $label);
})

//%%%%%%%%%%%%%%%%%%%% click on the "edit button" in the "Completed" list %%%%%%%%%%%%%%%//
$completedTasks.on( "click", ".edit-button", function(){
  var $list = $(this).parent();  
  var $input = $(this).prev();
  var $label = $input.prev();
  editTask($list, $input, $label);
})

//%%%%%%%%%%%%%%%  click on the checkbox in the "To-Do" list %%%%%%%%%%%%%%%//

$incompletedTasks.on( "click", "input.checkbox", function(){
 var listItem = $(this).parent();
 $completedTasks.append(listItem);
})

//%%%%%%%%%%%%%% when you click on the checkbox in the "Completed" list %%%%%%%%%%//

$completedTasks.on( "click", "input.checkbox", function(){

 var listItem = $(this).parent();

 $incompletedTasks.append(listItem);
})


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ //


