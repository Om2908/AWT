//Find the length of the array. 
console.log("element of aaray");
const num= [10,true,3.1,40,"om",50];
const num1= [23,"darsh"];
console.log(num);

console.log("length of aaray");
let length=num.length;
console.log(length);


//Access and display specific elements using indexing.
console.log("index wise array");
console.log(num[0]);
console.log(num[2]);
console.log(num[4]);

//Use array methods like push() ,pop(), shift(), unshift(), join(), 
//delete(),concate(),flat(),splice() and slice() to modify the array. 

console.log("push");
num.push(60,70);
console.log(num);

console.log("pop");
num.pop();
console.log(num);

console.log("shift");
num.shift();
console.log(num);

console.log("unshift");
num.unshift(110);
console.log(num);

console.log("join method");
let text = num.join("-");
console.log(text);

console.log("concat");
const a1 = num.concat(num1); 
console.log(a1);

console.log("flat");
const t1= [[1,2],[3,4],[5,6]];
const a = t1.flat();
console.log(a);

console.log("splice");
const v=[1,2,3,4,5]
v.splice(0,1,11);
console.log(v);

console.log("slice");
const p1 = num.slice(1, 3);
console.log(p1);

// console.log("delete");
// const t=num.remove(2)
// console.log(t);


console.log("create object and display the details");
let data = {
  name: "om",
  age: 19,
  gender: "Male",
};
function detail(item) {
  console.log(item.name);
  console.log(item.age);
  console.log(item.gender);
}

// console.log(detail);
detail(data);