function addtodo(){
var input = document.getElementById("todo-item")
// console.log(input.value)

var list = document.getElementById("listItems")
var listElement = document.createElement("li");
var listText = document.createTextNode(input.value)
listElement.appendChild(listText)
list.appendChild(listElement)
input.value = ""
}