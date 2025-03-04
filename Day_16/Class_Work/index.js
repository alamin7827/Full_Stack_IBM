// //settimeout setInterval, setImmediate...macrotask

// //promise,queMicrotask...Microtask

// let name = "synchronous";

// console.log(name);

// setTimeout(()=>{
//     console.log("synchoronus syning-3");
// },0);

// queueMicrotask(()=>console.log("Microtask syning"));

// let surName ="code";
// console.log(surName);

// for(let i=0; i<5; i++){
//     console.log(i);
//     setTimeout(()=>{
//         console.log(i);
//     },1000);
//     console.log(i);
// };

// // setTimeout(()=>{
// //     console.log("synchoronus syning-1");
// // },2000)

// // setTimeout(()=>{
// //     console.log("synchoronus syning-2");
// // },0);


// console.log(name,surName);


//promise is microtask
// let myPromise =new Promise((resolve,reject)=>{
//     let flag =true;

//     if(flag){
//         resolve("Promise is resolved with green flag")
//     }
//     else{
//         reject("Promise is reject eith red flag");
//     }

// });
// console.log(myPromise);

async function fetchData(){
    let data =await fetch('https://fakestoreapi.com/users')
    let ans = await data.json();
    console.log(ans);
}
fetchData();