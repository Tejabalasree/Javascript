//way to create string
//1.literal string
const mesg = "welcome to mern fullstack development";
//2.object syntax
const mesg1  = new String("welcome folks");
const mesg2 = "welcome folks";
//recommended one is literal syntax
//==,===
console.log(mesg1 == mesg2);//true //focus on only values
console.log(mesg1 === mesg2);//false //focus on values and reference


//==
//loginapp
//username:"admin" ,password:"admin123"
const username = "admin";
const password = "admin123";
if ((username == "admin") && (password == "admin123")){
   console.log("login success");
}
else{
    console.log("your password is incorrect");
   }

   //how to increase the length of a string
   //length
   console.log(mesg.length);

   //how to get portion of a string
   //slice(),substring(),substr()
   console.log(mesg.slice(16));
   console.log(mesg.slice(16,25));//inclusive,end-1
   console.log(mesg.slice(-25,-10));//25-10=15
   console.log(mesg.substring(16));
   console.log(mesg.substring(16,25));
   console.log(mesg.substring(-25,-10));
   //substring() doesn't allow negative values
   console.log(mesg.substr(16));
   console.log(mesg.substr(16,9));//start value index,end is 
   //strike symbol means its outdated,legacy,old


   //how to concate more than one string
   //+concat()
   console.log(mesg+" "+mesg1);
   console.log(mesg.concat(" "+mesg1));

   //replace string content
   //replace
   //regular expressions(i-insensitive,g-global)
   console.log(mesg.replace("welcome","warmwelcome"));
   console.log(mesg2.replace(/welcome/i,"warmwelcome"));
   console.log(mesg.replace(/welcome/g,"warmwelcome"));


   //search specific portion index from the string
   //indexof(),lastindexof(),search()
   console.log(mesg.indexOf("mern"));
   console.log(mesg.indexOf("welcome",10));
   console.log(mesg.lastIndexOf("welcome"));
   console.log(mesg.search("welcome"));
   

   const message = "nobita doremon"
   //converting a string to lowercase-------------------1
   const lowerMessage = message.toLowerCase();
console.log(lowerMessage);


//with substring()                        --------------2
let result5 = message.substring(0, 10);
console.log(result5);


//include                          ---------------------3
let result2 = message.includes("doremon");
console.log(result2);


//converting a string to uppercase     ------------------4
const upperMessage = message.toUpperCase();
console.log(upperMessage);


//trim                                   ----------------5
const newMessage = message.trim();
console.log(newMessage);


const name = "keep smiling"
//repeating a string                       -------------6
const result = name.repeat(3);
console.log(result);


//replacing all in strings                   ------------7
const message1  = "null will"
let result1 = message1.replaceAll('n', 'b');
console.log(result1);


//chart                                     ------------8
const string = "hii doremon";
let index1 = string.charAt(3);

console.log("Character at index 1 is " + index1);


//padend()                                   ------------9
let string1 = "koushik";
let paddedString = string1.padEnd(9, "*");
console.log(paddedString);


//padstart()                                   -----------10
let paddedString1 = string1.padStart(9, "*");
console.log(paddedString1);


//last indexof()                                ------------11
var str = "shinchan";
var substr = "i";
var result3 = str.lastIndexOf(substr);
console.log(result3);


//ends with()                                 ------------12
let sentence = "nobita and doremon are good friends."
let check = sentence.endsWith("good friends.");
console.log(check);  //true  
let sentence1= "nobita and doremon are good friends."
let check1 = sentence1.endsWith("doremon");
console.log(check1);//false                      ---------13


//match the strings                              ------------14
const message2 = "teja and kittu are brother and sister.";
const exp = /brother/;
let result4 = message2.match(exp);
console.log(result4);


//code pointat()                                  ------------15
let message3 = "Happy Birthday";
let codePoint1 = message3.codePointAt(1);
console.log("Unicode Code Point of 'a' is " + codePoint1);


//string charCodeat()                             -------------16
const greeting = "Good morning!";
let result6 = greeting .charCodeAt(3);
console.log(result6);


//advance javascript(ES6)
//multiline strings
const productName = `realme`;//back-tick
const aboutDiet = `dhanekula
 institute
  of
   engineering 
   and
    technology 
    vijayawada`;
console.log(aboutDiet);


//string interpolation
const firstName = "nobita";
const lastName = "nobi";
console.log(`${firstName} ${lastName}`);



























