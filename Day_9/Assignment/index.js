//Q1->What will be the output of the following code? Explain why. 
let x = "5"; 
let y = 5;

console.log(x == y);  
console.log(x === y); 
//Ans->true ,false

//Q->2How can you find the length of the longest word in this array? 

const words = ["JavaScript", "Programming", "Function", "Hoisting"]; 
// Write a function to get the longest word length 
function longest(words){
    let longWord=0;
    for(let i=0; i<words.length; i++){
        let currWord=words[i].length;
        if(currWord>words[longWord].length){
            longWord = i;
        }
        
    }
    return words[longWord];
}
//Ans ->"Programming"

//Q->3 What will be logged in the console? Explain your answer. 
function testScope() {
    if (true) {
        var a = 10;
        let b= 20;
        const c = 30; 
    }
    console.log(a);
    console.log(b);
    console.log(c);
}
testScope();
//in the above code a is decleared as var type it has a global scope, so its consle.log
//where as b and c are also decleared inside a block and they of type let and const 

//Q4. Rewrite the following function using const and fix any issues.
var name = "John";
function greet() {
if (true) {
var message = "Hello " + name;
}
console.log(message);
}
greet();

//Ans->Hello john

//Q5->Convert this traditional function into an arrow function without changing the output. 
function multiply(a, b) {
    return a * b; 
}
//soluation=>
const multiply = (a,b)=>{
    return a*b;

}

//Q6->What will be the output? Explain why. 
const obj = {
    name: "Alice",
    sayHello: function() {
        setTimeout(() => { 
            console.log("Hello, " + this.name);
        },1000); 
    }        
};

obj.sayHello(); 
//soluation->
//This will print Hello, Alice after 1 Sec
//this inside the arrow function refers to that particular thing that is defined in the  object, instead of window

//Q7. What will be the output of this code? Explain why.
console.log(a); 
var a = 10; 
console.log(b); 
let b = 20; 
//Soluation->
//As var has hosting property so console.log(a) will print undefined, but console.log(b) will give reference error as let doesnot have hosting property

//Q8->8 Rearrange the following function so it works correctly, explaining the problem.
console.log(square(5)); 
function square(n) {
    return n * n;
}//this code will work fine

console.log(double(4)); 
var double = function(n) {
    return n * 2;

} //this code soluation->
//..
var double = function(n) {
    return n * 2;

}
console.log(double(4));

//Q9 What will be the output of the following expressions? 
console.log(5 + "5");  //55
console.log(5 - "3");  //2
console.log(5 * "2");  //10
console.log("10" / 2); //5
console.log(10 % "3"); //1

//Q10  Rewrite this code using shorthand assignment operators.
let p = 10;
p = p + 5;//x+=5
p = p * 2;//x*=2
p = p - 3;//x-=3
p = p / 2;//x/=2 

//Q11->1 What will be logged in the console? Explain why. 
console.log(5 > 3 && 10 < 20); //True,because both are true 
console.log(5 > 3 || 10 > 20); //True ,Because if one is true its will print true
console.log(!(5 > 3)); // False because if true condition its give false so

//Q12-> What will be the output of the following function? 
function sum(a, b, c = 5) { 
    return a + b + c;
}
console.log(sum(2, 3));//10
console.log(sum(2, 3, 10));//15

// Q13.Write a function that takes any number of arguments and returns their sum.
function sum(...numbers){
    return numbers.reduce((ans,el)=>{
        ans+el
    },0);
}

// Q14.Fix the following function to work correctly and explain the issues.
function outer() {
    let count = 0;
    return function inner() {
    count++;
    console.log(count);
    };
    }
    const counter1= outer();
    counter1();
    counter1();
    const counter2= outer();
    counter2();
    counter2();
    //solution
    function outer() {
        let count = 0; // Closure variable
        return function inner() {
            count++; 
            console.log(count);
        };
    }
    
    // Creating first counter instance
    const counter_1 = outer();
    counter_1(); // Output: 1
    counter_1(); // Output: 2
    
    // Creating second counter instance
    const counter_2 = outer();
    counter_2(); // Output: 1
    counter_2(); // Output: 2
    //So, the code has no issue to fix
    // Q15.Write a function reverseNumber(num) that takes a number and returns its reverse.
    //solution
    function reverseNumber(num) {
        let reversed = 0;
    
        while (num !== 0) {
            let digit = num % 10;  // Extract last digit
            reversed = reversed * 10 + digit;  // Append digit to reversed number
            num = Math.trunc(num / 10);  // Remove last digit
        }
    
        return reversed;
    }
    
    // Examples
    console.log(reverseNumber(1234)); // Output: 4321
    console.log(reverseNumber(-567)); // Output: -765
    // Q16.Create a function customLength(str) that returns the length of a string without using length property. Example:
    // customLength("JavaScript"); // Output: 1️0
    function customLength(word){
        let count=0;
       for(let w of word){
        count++;
       }
       return count;
    }
    // Q17.Fix the bug in the following code without changing the function calls.
    console.log(add(2, 3)); // Should output: 5
    console.log(multiply(2, 3)); // Should output: 6️
    function add(a, b) {
    return a + b;
    }
    var multiply = function(a, b) {
    return a * b;
    };
    //solution
    console.log(add(2, 3)); 
    console.log(multiply(2, 3));
    function add(a, b) {
    return a + b;
    }
    function multiply(a, b) {
    return a * b;
};