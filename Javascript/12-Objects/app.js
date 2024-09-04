// console.log("hello world!");


// var user = ["abdullah" , 20]
// console.log(user[1]);

// var user = {
//     username: "Muhammad abdullah",
//     age: 21,
//     hobbies: ["cricket" , "Cooking" , "eating"],
//     isLoggedIn: true
// }

// console.log(user.hobbies[1])
// console.log(typeof(user))

// console.log(user.username);
// user.username = "Usman"
// user.lastName = "khan"

// delete user.age
// console.log(user);
// console.log(user["username"])

//this

// var user = {
//     username: "Muhammad abdullah",
//     age: 21,
//     hobbies: ["cricket" , "Cooking" , "eating"],
//     isLoggedIn: true,
//     greetUser: function (){
//         // console.log("hello " + this.username + " with age" + this.age);
//         console.log(this);


//     }
// }

// user.greetUser()


// window.alert




// function hello (val){
//     console.log(val.innerHTML);
//     val.innerHTML = "updated"

// }



// var hello = function (){
//     console.log("hello world");

// }
// hello()


























// var manager = {
//     username: "Abdullah",
//     qualification: "Matric",
//     users: {
//         userOne: {
//             name: "usman",
//             qualification: "inter"
//         } ,
//         userTwo: {
//             name: "Ammar",
//             qualification: "matric"
//         } ,
//         userThree: {
//             name: "affan",
//             qualification: "phd"
//         } ,
//     }

// }


// console.log(manager.users.userOne.qualification)



// var manager = {
//     username: "Abdullah",
//     qualification: "Matric",
//     users: [
//         {
//             name: "usman",
//             qualification: "inter"
//         },
//         {
//             name: "ammar",
//             qualification: "inter"
//         },
//         {
//             name: "affan",
//             qualification: "inter"
//         },
//     ]
// }


// console.log(manager.users[1].name);





// let nestedData = [
//     {
//         category: "Electronics",
//         subcategories: [
//             {
//                 name: "Smartphones",
//                 products: [
//                     { brand: "Apple", model: "iPhone 13", price: 999 },
//                     { brand: "Samsung", model: "Galaxy S21", price: 799 },
//                     { brand: "Google", model: "Pixel 6", price: 699 }
//                 ]
//             },
//             {
//                 name: "Laptops",
//                 products: [
//                     { brand: "Apple", model: "MacBook Pro", price: 1499 },
//                     { brand: "Dell", model: "XPS 13", price: 1299 },
//                     { brand: "HP", model: "Spectre x360", price: 1199 }
//                 ]
//             }
//         ]
//     },
//     {
//         category: "Clothing",
//         subcategories: [
//             {
//                 name: "Men's",
//                 products: [
//                     { brand: "Nike", item: "T-shirt", price: 25 },
//                     { brand: "Adidas", item: "Joggers", price: 40 }
//                 ]
//             },
//             {
//                 name: "Women's",
//                 products: [
//                     { brand: "Zara", item: "Dress", price: 50 },
//                     { brand: "H&M", item: "Jeans", price: 30 }
//                 ]
//             }
//         ]
//     }
// ];


// console.log(nestedData[1].subcategories[0].products[1].brand);














const items = [
    {
        title: 'Home',
        description: 'This is the homepage of the website.',
        icon: 'home_icon.png'
    },
    {
        title: 'About',
        description: 'Learn more about our company and team.',
        icon: 'about_icon.png'
    },
    {
        title: 'Services',
        description: 'Discover the services we offer.',
        icon: 'services_icon.png'
    },
    {
        title: 'Contact',
        description: 'Get in touch with us for more information.',
        icon: 'contact_icon.png'
    },
    {
        title: 'Blog',
        description: 'Read our latest blog posts and articles.',
        icon: 'blog_icon.png'
    }
];

var div = document.querySelector("#pages");

for (var i = 0; i < items.length; i++) {
    console.log(items[i])
    div.innerHTML += `
    <div class="items"> 
    <h3>Title: ${items[i].title}</h3>
    <p>Description: ${items[i].description}</p>
    </div>
    `
}








