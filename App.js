var list = document.getElementById("list");

function addTodo(){
var todo_item = document.getElementById("todo-item");
var li = document.createElement("li");
var liText = document.createTextNode(todo_item.value);
li.appendChild(liText)
li.setAttribute("class","list")
list .setAttribute("class","ul")


var editBtn = document.createElement("button")
var editText = document.createTextNode("edit")
editBtn.appendChild(editText)
li.appendChild(editBtn)
editBtn.setAttribute("class","edit")
editBtn.setAttribute("onclick","editItem(this) ")



var delBtn = document.createElement( "button");
var delText = document.createTextNode("Delete")
delBtn.appendChild(delText)
list.appendChild(li )
li.appendChild(delBtn)  
delBtn.setAttribute("class","remove")
delBtn.setAttribute("onclick","deleteItem(this)")
todo_item.value = "" 

}
 function deleteItem(e){

     e.parentNode.remove()
 }
 function deleteAll(){
     list.innerHTML=" "
 }
 function editItem(e){
   
     var val = prompt("enter updated  value",e.parentNode.firstChild.nodeValue)
     e.parentNode.firstChild.nodeValue=val
     
 }