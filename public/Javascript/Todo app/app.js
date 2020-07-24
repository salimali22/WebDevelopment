var list = document.getElementById("list");

function add(){
    var task = document.getElementById("task");
    // console.log(list)
    var li = document.createElement("li");
    var litext = document.createTextNode(task.value)
    // console.log(li)
    // console.log(litext)
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var delbtn = document.createElement("button");
    delbtn.innerHTML = "Delete"
    var editbtn = document.createElement("button");
    editbtn.innerHTML = "Edit"
    delbtn.style.margin = "0px 0px 0px 60px";
    editbtn.style.margin = "0px 0px 0px 10px"
    delbtn.setAttribute("onclick","deleted(this)");
    editbtn.setAttribute("onclick","edit(this)")
    td1.appendChild(litext);
    td2.appendChild(delbtn);
    td3.appendChild(editbtn);
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    list.appendChild(tr)
    console.log(list)
    task.value = "";
}
function deleteall(){
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
}

function deleted(a){
a.parentNode.parentNode.remove();
}
function edit(a){
    console.log(a.parentNode.parentNode.firstChild.innerHTML)
var curr = a.parentNode.parentNode.firstChild.innerHTML;
var newTask = prompt("Enter the new task",curr);
a.parentNode.parentNode.firstChild.innerHTML = newTask;
}