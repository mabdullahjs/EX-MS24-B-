// console.log("hello world!");

// var h1 = document.querySelector("#head");
// var div = document.querySelector("div");

// // console.log(h1.innerHTML)

// function changeText(){
//     h1.innerHTML = "change through javascript "
//     div.innerHTML = "<h1>Hello div</h1> <hr/> <p>lorem abc</p>"
// }

// alert("hello")
// console.log('hello world');

// var fullname = document.querySelector("#fullname");
// var email = document.querySelector("#email");
// var password = document.querySelector("#password");

// function loginUser(){
//     console.log(fullname.value);
//     console.log(email.value);
//     console.log(password.value);
// }




var num1 = document.querySelector("#num1")
var num2 = document.querySelector("#num2")
var result = document.querySelector("#result")

function sum(){
    var addition = +num1.value + +num2.value
    console.log(addition)
    result.innerHTML = "sum is " + addition
}

function clears(){
    console.log('clear function called');
    num1.value = ""
    num2.value = ""
    result.innerHTML = ""
    
}