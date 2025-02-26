// Problem 1: Create a Student Management System (Using Objects)
// Create an object student that has the following properties: 
// • name (string) 
// • rollNumber (number) 
// • marks (object containing subject-wise marks) 
// • getAverageMarks (method that calculates and returns the average of all subjects) 
// • checkPassOrFail (method that checks if the student has passed. A student is considered 
// passed if their average marks are above 40.)

const student ={
    name :"Alamin Akhtar",
    rollNumber :150,
    marks:{
        math : 80,
        Science : 65,
        English: 50, 
        History: 70
    },
    getAverageMarks :function(){
        let math=this.marks.math
        let sci = this.marks.Science
        let eng = this.marks.English
        let his = this.marks.History
        let avg =(math+sci+eng+his)/4;
        return avg;

    },
    checkPassOrFail : function(){
        
        if(this.getAverageMarks()>40){
            console.log("Passed")
        }
        else{
            console.log("Fail");
        }

    }
}
console.log(student.getAverageMarks()); //outPut:66.25
student.checkPassOrFail(); //output : "Passed"

//Problem 2: Library System (Nested Objects & Methods) 
// Create an object library that contains a books object, where each book has the following details: 
// • title (string) 
// • author (string) 
// • availableCopies (number) 
// • borrowBook (method that reduces the availableCopies by 1 if copies are available) 
// • returnBook (method that increases the availableCopies by 1)

const library ={
    books:{
        "Atomic Habits":{
            author:"James Clear",
            availableCopies : 3
        },
        "The Alchemist" :{
            author :"paulo Coelho",
            availableCopies : 5
        }
        
    },
    borrowBooks :function(bookName){
        if(this.books[bookName] && this.books[bookName].availableCopies>0){
            this.books[bookName].availableCopies--;
            console.log(`You borrowed '${bookName}'. Copies left: ${this.books[bookName].availableCopies}`);

        }
        else{
            console.log(`sorry ${bookName} is not available right now`);
        }

    },
    returnBook :function(bookName){
        if(this.books[bookName]){
            this.books[bookName].availableCopies++;
            console.log(`You returned ${bookName} . Copies available ${this.books[bookName].availableCopies}`);

        }
        else{
            console.log(`The book '${bookName}' does not belong to this library.`);
        }
    }
}
library.borrowBooks("Atomic Habits");//output ->You borrowed 'Atomic Habits'. Copies left: 2
console.log(library.books["Atomic Habits"].availableCopies);  // Output: 2 

//Problem 3: Generate Multiplication Table (For Loop) 
//Write a function generateTable(num, limit) that prints the multiplication table of a given num up to limit.
//Ans->

function generateTable(num,limit){
    for(let i=0; i<=limit; i++){
        console.log(`${num}*${i} = ${num*i}`);
    }
}
generateTable(5,10);

//Problem 4: FizzBuzz (If-Else Conditions) 
// Write a function fizzBuzz(n) that prints numbers from 1 to n, but: 
// • Print "Fizz" if the number is a multiple of 3 
// • Print "Buzz" if the number is a multiple of 5 
// • Print "FizzBuzz" if the number is a multiple of both 3 and 5 
// • Otherwise, print the number itself

function fizzBuzz(num){
    if(num%3==0 && num%5==0){
        console.log("FizzBuzz");
    }
    else if(num%3==0){
        console.log("Fizz");
    }
    else if(num%5 ==0){
        console.log("Buzz");
    }
    else{
        console.log(num);
    }
}

fizzBuzz(15);//FizzBuzz

//Problem 5: Reverse a String Without Using .reverse()
//Write a function reverseString(str) that takes a string and reverses it without using .reverse() method
let str="JavaScript";

function reverseString(str){
    let store =str.length-1;
    let add="";
    for(let i=store; i>=0; i--){
        add+=str[i];
        
    }
    console.log(add);

}
reverseString(str);//output->tpircSavaJ

//Problem 6: Remove Duplicates from an Array 
//Write a function removeDuplicates(arr) that removes duplicate elements from an array without using Set(). 
let arr=[1,2,3,4,5,6,1,2,3,4,5,6];

function removeDuplicates(arr){
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        if(newArr.indexOf(arr[i])==-1){
            newArr.push(arr[i]);
        }
        
    
    }
    return newArr;
}
console.log(removeDuplicates(arr));//output-> [1, 2, 3, 4, 5, 6]

// Problem 7: Find the Longest Word in a Sentence 
//Write a function longestWord(sentence) that finds the longest word in a given sentence.
let stri ="Coding is amazing and challenging";

function longestWord(stri){
    let words =stri.split(" ");
    
    let longest=" ";
    for(let word of words){
        if(word.length>longest.length){
            longest=word;
        }
    }
    return longest;
}

console.log(longestWord(stri));//output->challenging

//Problem 8: Custom Array Method (Creating Your Own .map()) 
//JavaScript has a built-in .map() method, but can you create your own version of it? Write a function myMap(arr, callback) that takes an array and a callback function and applies the callback to each element. 

function myMap(arr, callback) {
    let result = []; 
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr)); // callback
    }
    return result;
}

// Example callback function
function myCallback(x) { 
    return x * 2; 
}

console.log(myMap([1, 2, 3, 4], myCallback));  
// Output: [2, 4, 6, 8]

//Problem 9: Find the First Non-Repeating Character in a String
//Write a function firstUniqueCharacter(str) that returns the first non-repeating character in a given string. 
function firstUniqueCharacter(str) {
    let charCount = {}; 

   
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; 
        }
    }

    return null; 
}

console.log(firstUniqueCharacter("aabbcddce")); // Output: "e"

//Problem 10: Nested Loop Challenge – Find Pairs that Sum to a Target
//Write a function findPairs(arr, target) that finds all pairs of numbers in an array that sum to a given target. 

function findPairs(arr, target) {
    let pairs = [];
    let seen = new Set(); 

    for (let num of arr) {
        let complement = target - num; 

        if (seen.has(complement)) {
            pairs.push([complement, num]); 
        }

        seen.add(num); 
    }

    return pairs;
}

console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10));  
// Output: [ [3, 7], [2, 8], [5, 5] ]

//Problem 11: Implement a Stack in JavaScript 
//A stack follows the LIFO (Last In, First Out) principle. Implement a Stack class with the following 

class Stack {
    constructor() {
        this.items = []; 
    }

    
    push(value) {
        this.items.push(value);
    }

    
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

   
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

   
    isEmpty() {
        return this.items.length === 0;
    }
}

// Example Usage
let myStack = new Stack();
myStack.push(10);
myStack.push(20);

console.log(myStack.pop()); // Output: 20
console.log(myStack.peek()); // Output: 10
console.log(myStack.isEmpty()); // Output: false


//Question: - String Manipulation Challenge 
//You are given a string containing alphabets and numbers. Your task is to extract all numbers from the string, sum them up, and return the new modified string where all numbers are replaced with their sum.

function replaceNumbersWithSum(str) {
    let sum = 0;
    let newStr = str.replace(/\d+/g, (match) => {
        sum += parseInt(match); 
        return ""; 
    });

    return newStr + sum; 
}

// Example usage
console.log(replaceNumbersWithSum("abc123xyz45pq7")); // Output: "abc175pq"

//Question: - Find Most Frequent Element in an Array 
//Given an array of numbers, find the element that appears the most times. If multiple elements have the same frequency, return any one of them.
 
function mostFrequentElement(arr) {
    let freqMap = new Map(); 
    let maxFreq = 0;
    let mostFrequentNum = null;

    
    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);

        
        if (freqMap.get(num) > maxFreq) {
            maxFreq = freqMap.get(num);
            mostFrequentNum = num;
        }
    }

    return mostFrequentNum;
}

// Example usage
console.log(mostFrequentElement([1, 3, 2, 3, 4, 1, 3, 2, 3, 5])); // Output: 3








 



