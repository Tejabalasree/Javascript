//way to create array
//1.literal syntax
const stuNames = ["ganesh","tom","meera","durga","sai"];
//2.object syntax
const eNames = new Array("sreya","jyothi","kittu","chinni");
//recommended one is literal syntax

//to retrive all the array element
//for.of
for(let sName of stuNames)
{
    console.log(sName);
}
//foreach() method
//callback methods
stuNames.forEach((value) => {
    console.log(value);
})
   

//how to add elements
//push(),unshift()
//join at end of array
stuNames.push("hemanth");
console.log(stuNames);
//join at start of array
stuNames.unshift("vanaja");
console.log(stuNames);
stuNames.splice(3,0,"rithik","shivani");
console.log(stuNames);

//how to remove element from array
//pop(),shift()
stuNames.pop();
console.log(stuNames);
stuNames.shift();
console.log(stuNames);
stuNames.splice(4,2);
console.log(stuNames);
//deleting stuNames[2];
//console.log(stuNames);

//replace
stuNames[3] = "rohith";
console.log(stuNames);

//sorting
//sort(),reverse()
console.log(stuNames.sort());
console.log(stuNames.reverse());

//how to get portion of an array
//slice()
console.log(stuNames.slice(3));


//to search specific array element
//indexOf(),lastIndexOf(),includes()
console.log(stuNames.indexOf("vamsi"));
console.log(stuNames.lastIndexOf("myna"));
console.log(stuNames.includes("meera"));


//array length                                                 -------------1
let city = ["hyderabad", "vizag", "delhi", "banglore","mumbai"];
let len = city.length;
console.log(len);


//array constructor                                               ----------2
let languages = ["JavaScript", "c", "Python"];
let constructor = languages.constructor;
console.log(constructor)


//array fill                                                    -------------3
var fruits = ['Apple', 'banana', 'Grape'];
fruits.fill("kiwi");
console.log(fruits);


//array flat()                                                   -----------4
let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];
let flattenArray = numbers.flat(2);
console.log(flattenArray);


//array forEach()                                               -------------5
let numbers2 = [1, 3, 4, 9, 8];
function computeSquare(element) {
  console.log(element * element);
}
numbers2.forEach(computeSquare);


//array from()                                                    ------------6
let newArray = Array.from("hatori");
console.log(newArray);


//array is array()                                                 ------------7
let numbers3 = [1, 2, 3, 4];
console.log(Array.isArray(numbers3));// checking whether number is an array or not

let text = "JavaScript";
console.log(Array.isArray(text));// checking whether text is an array or not


//array join()                                                     -------------8
let message = ["keep", "smiling", "bro."];
let joinedMessage = message.join(" ");
console.log(joinedMessage);


//array keys()                                                    --------------9
let alphabets = ["A", "B", "C"];
let iterator = alphabets.keys();
for (let key of iterator) {
  console.log(key);
}


//array reduceright()                                              -------------10
let numbers4 = [1, 2, 3, 4];
function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}
let sum = numbers4.reduceRight(sum_reducer);
console.log(sum);


//array some()                                                      ------------11
function isEven(element) {
  return element % 2 === 0;
}
let numbers5 = [1, 3, 2, 5, 4];
console.log(numbers5.some(isEven));


//array to loacalstring()                                          --------------12
let array1 = ["ibrahimpatnam", 1];
let stringFromArray = array1.toLocaleString();
console.log(stringFromArray);


//array to string()                                                 ------------13
let items = ["sizuka", 7, "h", 9];
let itemsString = items.toString();
console.log(itemsString);

let languages2 = ["Java", "Python", "javascript"];
//array unshift()                                                   ------------14
languages2.unshift("bootstrap");
console.log(languages2);


//array values()                                                    -------------15
let iteratorObject = languages2.values();
for (let value of iteratorObject) {
  console.log(value);
}


let numbers6= [1, 2, 3, 4, 5];
//array flatmap()                                                   -----------16
const resultingArray = numbers6.flatMap((x) => [x ** 2]);
console.log(resultingArray);


//array find()                                                       ------------17
function isEven(element) {
  return element % 2 == 0;
}
let evenNumber = numbers6.find(isEven);                                      
console.log(evenNumber);


//array findIndex()                                               --------------18
function isOdd(element) {
  return element % 2 !== 0;
}
let numbers7 = [2, 8, 1, 3, 4];
let firstOdd = numbers7.findIndex(isOdd);
console.log(firstOdd);


//filter()                                                         ----------------19
let numbers8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkEven(number) {
  if (number % 2 == 0)
    return true;
  else
    return false;
}
let evenNumbers = numbers8.filter(checkEven);
console.log(evenNumbers);


//array map()                                                    ---------------20
let numbers9 = [2, 4, 6, 8, 10];
function square(number) {
  return number * number;
}
let square_numbers = numbers9.map(square);
console.log(square_numbers);










































