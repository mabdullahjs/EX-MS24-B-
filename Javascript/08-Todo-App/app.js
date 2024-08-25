// console.log("hello world!");

// crud

// create
// read
// update
// delete



var input = document.querySelector("#input");
var ol = document.querySelector("#ol");

var arr = [];

function renderTodo(){
    ol.innerHTML = ""
    
    for(var i = 0; i < arr.length; i++){
        ol.innerHTML += `
        <li>${arr[i]}
        <button onclick="deleteTodo(${i})">Delete</button>
        </li>`
    }
}

function addTodo(){
    arr.push(input.value);
    renderTodo()
    input.value = ""
}

function deleteTodo(index){
    console.log("todo deleted" , index);
    arr.splice(index , 1);
    renderTodo()
    
}

// var fruits = ["apple" , "baanana" , "orange" , "mango"];

// for(var i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
//     ol.innerHTML += `<li>${fruits[i]}</li>`
// }


// var username = "abdullah";
// var age = 20;

// // console.log("my name is " + username + " and my age is " + age)
// console.log(`hello world ${username}`);
