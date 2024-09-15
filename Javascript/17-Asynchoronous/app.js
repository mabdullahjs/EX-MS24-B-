// console.log("1");
// console.log("2");
// console.log("3");
// setTimeout(()=>{
//     console.log("4");
// } , 0)
// console.log("5");



//set timeout
//set interval
//promise
//async await
//fetch
//axios



// const getData = database sa data mangwalia



// setTimeout(() => {
//     console.log("Data agayaa")
// }, 1000);













//promises

// pending
// fulfilled
// reject



// const bankBalance = 50000;
// const promise1 = new Promise((resolve, reject) => {
//     if (bankBalance > 100000) {
//         console.log("chalo pak tour pa")
//         resolve()
//     } else {
//         console.log("ghar beth bhai");
//         reject()

//     }
// })


// promise1
//     .then(()=>{
//         console.log("promise fulfilled");
        
//     })
//     .catch(()=>{
//         console.log("promise rejected");

//     })







// const khapaKaIrada = true
// const promise2 = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         if(khapaKaIrada){
//             console.log("ajao rameez bhai khapaa paa");
//             resolve()
            
//         }else{
//             console.log("mushkil ha maalik, ghar pa mehmaan agaye hain.");
//             reject()
            
//         }
//     } , 1000)
// })

// promise2.then(()=>{
//     console.log("promise fulfilled");
    
// }).catch(()=>{
//     console.log("promise rejected");
    
// })












// function shaadiScnz(bankBalance){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             if(bankBalance > 100000){
//                 resolve("shaadi Mubarak")
//             }else{
//                 reject("ammi zehr kahlaingi..")
//             }
//         }, 2000);
//     })
// }




// shaadiScnz(200000)
// .then((res)=>{
//     return res + " concatinate"
    
// }).then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);

// })

















