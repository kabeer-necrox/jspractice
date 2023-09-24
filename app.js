function addtodo(){
var input = document.getElementById("todo-item")
// console.log(input.value)

var list = document.getElementById("listItems")
var listElement = document.createElement("li");
var listText = document.createTextNode(input.value)
listElement.appendChild(listText)
// **********Delete bTn***********************

let delBtn = document.createElement('button')
let delBtnText = document.createTextNode("delete")
delBtn.appendChild(delBtnText)
delBtn.setAttribute("onclick","delTodo(this)")
listElement.appendChild(delBtn)



// **********Edit bTn***********************

let editBtn = document.createElement('button')
let editBtnText = document.createTextNode("edit")
editBtn.appendChild(editBtnText)
editBtn.setAttribute("onclick","editBtn(this)")
listElement.appendChild(editBtn)
editBtn.setAttribute("onclick","editTodo(this)")
list.appendChild(listElement)
input.value = ""
}



// ***************delete all element unction*********************************************************************
function seletetodo(){
    var list = document.getElementById("listItems")
 
    // list.innerHTML = ""

    list.remove();
}


function delTodo(e){
    console.log(e.parentNode.remove())
    // console.log("it is workimgn")

}


function editTodo(e){
    var currentli =e.parentNode.firstChild.nodeValue;
    var inputfield =  prompt("enter updated value", currentli)
    // console.log(e)
    e.parentNode.firstChild.nodeValue = inputfield
}