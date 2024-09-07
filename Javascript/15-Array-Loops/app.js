// console.log("Hello world!");


// foreach
// map
// filter
// reduce

// callback


// const fruits = ["mango" , "orange" , "banana" , "apple" , "pineapple"];

// const students = [
//     { name: "John Doe", age: 20, course: "Computer Science" },
//     { name: "Jane Smith", age: 22, course: "Mathematics" },
//     { name: "Sam Johnson", age: 19, course: "Physics" },
//     { name: "Emily Davis", age: 21, course: "Biology" },
//     { name: "Michael Brown", age: 23, course: "Chemistry" },
//     { name: "Sarah Wilson", age: 20, course: "History" },
//     { name: "David Lee", age: 18, course: "Engineering" },
//     { name: "Laura Miller", age: 22, course: "Economics" },
//     { name: "James Anderson", age: 19, course: "Philosophy" },
//     { name: "Olivia Taylor", age: 21, course: "Art" }
//   ];

//   const num = [1,2,3,65,4,3,23,466,4,2,54,2,32]

// const div = document.querySelector("div");

// console.log(fruits);
// fruits.forEach(function (item , index){
//     // console.log(item , index , arr)
//     div.innerHTML += item + "<br/>"

// })


// students.forEach(item =>{
//     console.log(item);
//     div.innerHTML += `<p>${item.name}</p>`
    
// })




// const iteratedArr = fruits.forEach(item =>{
//     console.log(item);
//     return item
// })

// console.log(iteratedArr);


// const iteratedArr = fruits.map(item =>{
//     console.log(item);
//     return item + " s"
// })

// console.log(iteratedArr);





// const iterated = fruits.map((item)=>{
//     console.log(item)
//     return item + " hello"

// })



// const iterated = fruits.map(item => item + " hello");
// console.log(iterated);



// saara students screen pa render krwana hain through map, har student ka saath aik btn hoga delete kaa, jaisa hi us btn pa click kro wohi specific student delete hojaye. agar screen pa koi student na bacha to likha ajaye no student found.





// const iteratedVal = fruits.forEach(function (item){
//   console.log(item)
//   div.innerHTML += `<p>${item}</p>`
//   return item

// })

// console.log(iteratedVal);

// const iteratedVal = fruits.map(function (item){
//   console.log(item)
//   div.innerHTML += `<p>${item}</p>`
//   return item + " items"

// })

// console.log(iteratedVal);



// const filteredArr = num.filter(function (item){
//   return item > 10
// })






// const filtered = num.filter(item => item > 20)
// console.log(filtered);




// const filterStudents = students.filter( item => item.age > 20 && item.age < 23)

// console.log(filterStudents);

// filterStudents.map()







// const products = [
//     // Electronics
//     {
//         name: "Wireless Mouse",
//         price: 25.99,
//         category: "Electronics",
//         brand: "Logitech"
//     },
//     {
//         name: "Smartphone",
//         price: 699.99,
//         category: "Electronics",
//         brand: "Samsung"
//     },
//     {
//         name: "LED Monitor",
//         price: 129.99,
//         category: "Electronics",
//         brand: "Dell"
//     },
//     {
//         name: "Bluetooth Speaker",
//         price: 45.99,
//         category: "Electronics",
//         brand: "JBL"
//     },
//     {
//         name: "Laptop",
//         price: 999.99,
//         category: "Electronics",
//         brand: "Apple"
//     },

//     // Footwear
//     {
//         name: "Running Shoes",
//         price: 59.99,
//         category: "Footwear",
//         brand: "Nike"
//     },
//     {
//         name: "Sneakers",
//         price: 75.99,
//         category: "Footwear",
//         brand: "Adidas"
//     },
//     {
//         name: "Sandals",
//         price: 25.99,
//         category: "Footwear",
//         brand: "Teva"
//     },
//     {
//         name: "Formal Shoes",
//         price: 120.00,
//         category: "Footwear",
//         brand: "Clarks"
//     },
//     {
//         name: "Boots",
//         price: 150.00,
//         category: "Footwear",
//         brand: "Timberland"
//     },

//     // Home Appliances
//     {
//         name: "Blender",
//         price: 34.99,
//         category: "Home Appliances",
//         brand: "Oster"
//     },
//     {
//         name: "Microwave Oven",
//         price: 99.99,
//         category: "Home Appliances",
//         brand: "Panasonic"
//     },
//     {
//         name: "Air Conditioner",
//         price: 299.99,
//         category: "Home Appliances",
//         brand: "LG"
//     },
//     {
//         name: "Vacuum Cleaner",
//         price: 149.99,
//         category: "Home Appliances",
//         brand: "Dyson"
//     },
//     {
//         name: "Toaster",
//         price: 29.99,
//         category: "Home Appliances",
//         brand: "Breville"
//     },

//     // Stationery
//     {
//         name: "Notebook",
//         price: 3.99,
//         category: "Stationery",
//         brand: "Moleskine"
//     },
//     {
//         name: "Pen Set",
//         price: 12.99,
//         category: "Stationery",
//         brand: "Parker"
//     },
//     {
//         name: "Highlighters",
//         price: 5.99,
//         category: "Stationery",
//         brand: "Sharpie"
//     },
//     {
//         name: "Stapler",
//         price: 7.99,
//         category: "Stationery",
//         brand: "Swingline"
//     },
//     {
//         name: "Planner",
//         price: 14.99,
//         category: "Stationery",
//         brand: "Erin Condren"
//     },

//     // Furniture
//     {
//         name: "Desk Chair",
//         price: 89.99,
//         category: "Furniture",
//         brand: "Ikea"
//     },
//     {
//         name: "Coffee Table",
//         price: 129.99,
//         category: "Furniture",
//         brand: "West Elm"
//     },
//     {
//         name: "Sofa",
//         price: 499.99,
//         category: "Furniture",
//         brand: "Ashley Furniture"
//     },
//     {
//         name: "Bookshelf",
//         price: 79.99,
//         category: "Furniture",
//         brand: "Sauder"
//     },
//     {
//         name: "Dining Table",
//         price: 399.99,
//         category: "Furniture",
//         brand: "Pottery Barn"
//     },

//     // Fitness
//     {
//         name: "Yoga Mat",
//         price: 19.99,
//         category: "Fitness",
//         brand: "Gaiam"
//     },
//     {
//         name: "Dumbbells",
//         price: 49.99,
//         category: "Fitness",
//         brand: "Bowflex"
//     },
//     {
//         name: "Treadmill",
//         price: 699.99,
//         category: "Fitness",
//         brand: "NordicTrack"
//     },
//     {
//         name: "Resistance Bands",
//         price: 14.99,
//         category: "Fitness",
//         brand: "Fit Simplify"
//     },
//     {
//         name: "Exercise Bike",
//         price: 299.99,
//         category: "Fitness",
//         brand: "Peloton"
//     },

//     // Kitchen Appliances
//     {
//         name: "Coffee Maker",
//         price: 49.99,
//         category: "Kitchen Appliances",
//         brand: "Keurig"
//     },
//     {
//         name: "Air Fryer",
//         price: 89.99,
//         category: "Kitchen Appliances",
//         brand: "Ninja"
//     },
//     {
//         name: "Stand Mixer",
//         price: 199.99,
//         category: "Kitchen Appliances",
//         brand: "KitchenAid"
//     },
//     {
//         name: "Refrigerator",
//         price: 799.99,
//         category: "Kitchen Appliances",
//         brand: "Whirlpool"
//     },
//     {
//         name: "Dishwasher",
//         price: 399.99,
//         category: "Kitchen Appliances",
//         brand: "Bosch"
//     }
// ];

// console.log(products)


// const div = document.querySelector(".items");

// products.map(item =>{
//   div.innerHTML += `
//    <div class="card">
//             <h1>${item.name}</h1>
//             <h3>${item.category}</h3>
//             <h1>Rs: ${item.price}</h1>
//    </div>
//   `
// })



const div = document.querySelector(".btn");

// const hello = () => {
//   console.log("hello world!")
// }


// btn.addEventListener("mouseover" , hello)
// btn.addEventListener("mouseout" , hello)
// btn.addEventListener("click" , (event) => {
//   console.log(event.target)
// })


div.addEventListener("click" , (event)=>{
  // console.log(event.target)
  // event.target.remove()
  
  
})




// sum(20 , 30)

// function sum(num1 , num2){
//     console.log(num1 + num2);
    
//     return num1 + num2
    
    
// }

// let total = sum(20 , 50);
// console.log(total)



// var sum = function (num1 , num2){

// }

// sum()


// sum(20 , 39)
// const sum = (num1 , num2) => {
//     console.log(num1 + num2)
//     return num1 + num2
// }

// let total = sum(20 , 50);
// console.log(total)



// const greetUser = username => `hello ${username}`


// const greetingUser = greetUser("abdullah");
// console.log(greetingUser);



// const sum = (num1 , num2) => num1 + num2;
// const total = sum(100 , 200);
// console.log(total);
































