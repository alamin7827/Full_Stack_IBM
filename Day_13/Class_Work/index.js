//foreach

// let arr =[1,2,3,4,6,7,8,9,10,12,13,14,15,16,18];

// let ans =arr.forEach((el,i)=>{
//     return el;


// });
// console.log(ans);

//map
// let ans =arr.map((el,i)=>{
//     return el+i;
// })
// console.log(ans);

//filter
// let output =arr.filter((el,i)=>{
//     // return el%2==0 && el!==6;
//     return  typeof el =="string" || el%5==0;

// });
// console.log(output);

//reduce
// let ans =arr.reduce((acc,el)=>{
//     return acc + el;
// });
// console.log(ans);

// let output =arr.filter((el,i)=>{
    
//     return el%5==0;

// }).map((el,i)=>{
//     return el*2;
// }).reduce((el,acc)=>{
//     return acc+el;
// })
// console.log(output);

// let arr =[3,5,1,8,5,34,90,67,45,100];
// let ans = arr.sort((a,b)=>{
//     return a-b; //assending order a hobe; (b-a)korle decending a hobe
//     //a,b egulo syntax 
// })

// console.log(ans);

let data =[
    {name:"watch", price:2000, desc:"Good watch", rating:4},
    {name:"shoe", price:1200, desc:"Good shoe", rating:4.5},
    {name:"car", price:100000, desc:"Good car", rating:5},
    {name:"phone", price:19999, desc:"Good phone", rating:4.2},
    {name:"laptop", price:70000, desc:"Good laptop", rating:4.8},
    {name:"headphone", price:6000, desc:"Good headphone", rating:3},
    {name:"laptop bag", price:3000, desc:"Good bag", rating:5}
];

// data.sort((a,b)=>{
//     return a.price-b.price
// })

data.sort((a,b)=>{ //sting a sort korar jonno 
    let nameA =a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    
    if(nameA>nameB){
        return 1;
    }
    if(nameA<nameB){
        return -1;
    }
})
console.log(data);