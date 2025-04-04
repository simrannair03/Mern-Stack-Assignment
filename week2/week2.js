// 1. Declare variables
let age = 25;
let Adult = age >= 18;
console.log("Is adult:", Adult);

// 2. Arithmetic operations
let x = 10, y = 5;
let sum = x + y;
let product = x * y;
let remainder = x % y;

console.log("sum:", sum);           
console.log("product:", product); 
console.log("remainder:", remainder);             

// 3. Check even or odd
let n = 7;
let result = (n % 2 === 0) ? "Even" : "Odd";
console.log("The number is:", result);


// 4. Store numbers from 1 to 5 in an array
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
console.log("Array:", numbers); 

// 5. Function to print square of a number using user defined function
function square(num) {
    return num * num;
}
console.log("Square of 4:", square(4)); 


