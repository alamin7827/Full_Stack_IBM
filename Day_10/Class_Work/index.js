let str ="hello baby"

console.log(str.length);
console.log(str[str.length-1]);
str[0]='u';
console.log(str);

let arr=[1,2,3,"sumonn",1.2,true,false,undefined,""];
console.log (arr[3]);
console.log(arr.pop());
console.log(arr.shift());
console.log(arr);

// let str1 = str.replace("h", "p");
// console.log(str1);

let obj={
    sumon:{classname:"B tech",rn:150,subject:["nm","Dsa","Rm"]},
    Asif: {classname:"B tech",rn:190,subject:["nm","Dsa","Rm"]},
    1:"smms",
}
obj.sumon="maaa";
obj.han="kan";


console.log(obj);
// console.log(obj.sumon.subject[1]);


//object literals

let name ="Alamin akhtar";
let Class = "B Tech";
let hobbise = ["Games", "Singing"]

let newObj = {
    name,Class,hobbise
}
console.log(newObj);


let ans =[1,2,3,[9,4,6,[5,1,9]]];
console.log(ans[3][3][0]);

let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13 }
    }
}
console.log(superHeroes["1"].villains[0].health);
console.log(superHeroes[2].power[0]);