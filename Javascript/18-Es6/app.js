// console.log("Hello world!");


// important topics to revise
// map
// filter
// spread operator
// splice
// slice
// ternary operator
// array of object rendering
// dom manipulation (form sa value get krna)
// addeventlistner
// api fetching


const username = "Abdullah";
const age = 17;
const isLoggedIn = true


const fruits = ["mango", "orange", "banana", "apple"]

const num = [2, 5, 7, 8, 4, 5, 9, 0];

const obj = {
    username: "abdullah",
    age: 21,
    email: "mabdullah@gmail.com",
    hobbies: ["eating", "cricket"]
}

const user = [
    {
        id: 1,
        username: "abc"
    },
    {
        id: 1,
        username: "abc"
    },
    {
        id: 1,
        username: "abc"
    },
    {
        id: 1,
        username: "abc"
    },
    {
        id: 1,
        username: "abc"
    },
]

// console.log(typeof(fruits));
// console.log(fruits[1])

// console.log(obj["username"]);
// console.log(typeof obj);





// console.log(fruits[2]);


// spread operator

// const newArr = ["new items", ...fruits,]
// console.log(newArr);




// const newObj = {
//     ...obj,
//     fatherName: "ajmal khan"
// }

// console.log(newObj);






// for(let i = 1; i <= 10; i++){
//     console.log(`2 * ${i} = ${2 * i}`);
// }


const div = document.querySelector("div");

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
//     div.innerHTML += fruits[i] + "<br/>"
// }



// fruits.map((item)=>{
//     console.log(item)
//    div.innerHTML += `${item} <br/>`

// })


// console.log(num);
// // num.splice(5 , 2 , "updated")
// console.log(num);



// const newArr = fruits.slice(1 , 3)
// console.log(newArr);




// if(age >= 18){
//     console.log("welcome to my gym");
// } else if(age >= 16){
//     console.log("1000 zyada doo or ajao");
// } else{
//     console.log("nikal yaha saa");

// }

// ternary operator

// age > 18 ? console.log("welcome to the gym") : console.log("nikal yaha saa")


// age >= 18 ? console.log("welcome to the gym") : age >= 16 ? console.log("1000 zyada do or ajao") : console.log("nikal yaha saa")















// console.log(user);

// user.map(item => {
//     // console.log(item);
//     div.innerHTML += `
//     <h1>${item.username}</h1>
//     <hr/>
//     `

// })




// function sum (num1 , num2){
//     console.log(num1 + num2);
//     return num1 + 30
// }

// const total = sum(20);
// console.log(total);



// const greetUser = username => `hello ${username}`


// const greetings = greetUser("abdullah");
// console.log(greetings);



// user[2].username = "abdullah"

// console.log(user);


// const form = document.querySelector("#form");
// const usernameInput = document.querySelector("#name");
// const ageInput = document.querySelector("#age");

// const globalArr = [];
// form.addEventListener("submit" , (event)=>{
//     event.preventDefault()
//     console.log(usernameInput.value);
//     console.log(ageInput.value);

//     globalArr.push({
//         username: usernameInput.value,
//         age: ageInput.value
//     })

//     console.log(globalArr);


// })













// function gymAdmission(age) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (age >= 18) {
//                 resolve("Ajao gym maa")
//             } else {
//                 reject("nahi aao gym ma")
//             }
//         }, 1000);
//     })
// }

// gymAdmission(20)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);

// })





// try{
//     aler("hello worl")

// }catch(error){
//     console.log(error);

// }
// console.log("console after alert");






// fetch('https://course-admission-portal.vercel.app/api/v1/student')
//     .then(res => res.json())
//     .then(res => {
//         div.innerHTML = ""
//         // console.log(res)
//         res.map((item)=>{
//             console.log(item);
//             div.innerHTML += `
//             <h1>${item.fullName}</h1>
//             <h1>${item.email}</h1>
//             <img width="100px" src=${item.profileImageUrl}/>
//             <hr/>
//             `

//         })
//     })
//     .catch((err)=>{
//         console.log(err);
//         div.innerHTML = "error occured"

//     })










// `https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityname}&aqi=no`






