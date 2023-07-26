// let
let x = 5;
x = 7; 
console.log( x);

// const
const p = 5;
console.log(p);

// Regular function
function add(num1, num2) {
    return num1 + num2;
}
console.log("Regular function : ", add(5, 7));

// Arrow function
let show = (a, b) => {
  console.log(a, b);
};
show(10,20,30);

// spread operator with arrays
const a1 = [1,2,3,"Apple",2.33];
const a2 = [...a1, true,4,5];
console.log("With spread ... of : ", a2);

// for/of 
const arr = [1,2,3,"Apple",2.33];
console.log("Array : ", arr);
console.log("for/of ");
for (const element of arr) {
    console.log(element);
}


//Map Objects
console.log("map objects ");
const map1 = new Map();

map1.set('one', 1);
map1.set('two', 2);
map1.set('three',3);
map1.set('four', 4);
map1.set('five', 5);

console.log(map1.get('a'));
map1.set('a', 1);

console.log(map1.get('a'));
console.log(map1.size);

map1.delete('b');

console.log(map1.size);


//set objects
console.log("\n Set objects ");
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3.3);
mySet.add(4);
mySet.add("Apple");


console.log(mySet);

//classes 
console.log("\nclasses ");
class om {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        console.log(`Hello, i am ${this.name}`);
    }
}

const person = new om('om');
person.greeting();


//promises 
console.log("\npromises");

function fetchData() {
    return new Promise((resolve, reject) => {
        const data = "resolved data";
        resolve(data);
    });
}

//  promises
fetchData()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

//symbol 
console.log("\nSymbol ");
const sym = Symbol('descri');
console.log(sym); 


//default parameter 
console.log("\ndefault parameters ");

function greet(name = 'Anonymous') {
    console.log(`Hello, ${name}`);
}

greet(); 
greet('om');


//function rest parameters 
console.log("\nfunction rest parameters ");

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); 