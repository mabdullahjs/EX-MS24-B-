// console.log("hello world!");



// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const form = document.querySelector("#form");
// const anchor = document.querySelector("a");


// const emailExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
// const passwordRegex = /^(?=.*[0-9])(?=.*[\W_]).{5,}$/
// const cnicRegex = /^\d{5}-\d{7}-\d{1}$/
// console.log(cnicRegex.test("42101-6442345-6"));


// const testEmail = emailExp.test("mabdullah2037gmail.com")
// console.log(testEmail);


// const testPassword = passwordRegex.test("as@1")
// console.log(testPassword);


// form.addEventListener("submit" , (event)=>{
//     event.preventDefault()
//     if(emailExp.test(email.value) && passwordRegex.test(password.value)){
//         console.log(email.value)
//         console.log(password.value)
//     }else{
//         alert("aba bhai sahi sa likh")
//     }
// })

// anchor.addEventListener("click" , (event)=>{
//     event.preventDefault()

// })







const phones = [{
    brand: 'Samsung',
    model: 'S20',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
},
{
    brand: 'Xiomi',
    model: 'note10',
    ram: 4,
    rom: 64,
    camera: '10 megapixel',
    price: 15000
},
{
    brand: 'Infinix',
    model: 'z10',
    ram: 2,
    rom: 16,
    camera: '5 megapixel',
    price: 15000
},
{
    brand: 'Tecno',
    model: 'spark10',
    ram: 12,
    rom: 512,
    camera: '25 megapixel',
    price: 15000
},
{
    brand: 'Iphone',
    model: '14',
    ram: 4,
    rom: 1024,
    camera: '30 megapixel',
    price: 15000
},
{
    brand: 'Oppo',
    model: 'F11',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
},
{
    brand: 'Vivo',
    model: 'y20',
    ram: 4,
    rom: 64,
    camera: '8 megapixel',
    price: 15000
},
{
    brand: 'Samsung',
    model: 's50',
    ram: 50,
    rom: 1024,
    camera: '60 megapixel',
    price: 300000
}]

const cartItems = []

const div = document.querySelector("#items");

phones.map((item, index) => {
    div.innerHTML += `
    <div class="card bg-dark text-light border-light" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${item.brand} ${item.model}</h5>
                <h5 class="card-title h6">Rs: ${item.price}</h5>
                <button onclick="addToCart(${index})" class="btn btn-primary mt-2" >Add to cart</button>
            </div>
        </div>
    `
})




function addToCart(index) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item added to cart",
        showConfirmButton: false,
        timer: 1500
    });
    if (cartItems.includes(phones[index])) {
        const itemIndex = cartItems.indexOf(phones[index])
        cartItems[itemIndex].quantity += 1;

    } else {
        phones[index].quantity = 1
        cartItems.push(phones[index])
    }
}






const checkoutBtn = document.querySelector("#checkout-btn");

checkoutBtn.addEventListener("click" , ()=>{
    localStorage.setItem("cartItem" , JSON.stringify(cartItems))
    window.location = "checkout.html"
})












