//sample program on datatypes
//number , string , boolean , null , undefined , array , object
var employeeID = "1602";//number
var employeeName = "teja";//string
var emobilenumber = 6281226206;//number
var employeesalary = 40000
var contractemployee = true;//boolean
var employeePF = null;//null
var medicalallow;//undefined
var enames = ["teja","hemanth","kittu","chinni"];//Array

var employeeinfo = {
	employeeID:2001,
	employeeName:"hemanth",
	employeemobilenum:9505635858

}
console.log(employeeID);
console.log(employeeName);
console.log(emobilenumber+" "+employeesalary);
console.log(contractemployee);
console.log(employeePF);
console.log(medicalallow);
console.log(enames);
console.log(employeeinfo);

//how to know datatype of any field
//typeof
console.log(typeof(employeeID));
console.log(typeof(employeeName));
console.log(typeof(contractemployee));
console.log(typeof(emobilenumber+" "+employeesalary));
console.log(typeof(employeePF));
console.log(typeof(medicalallow));
console.log(typeof(enames));
console.log(typeof(employeeinfo));

//null,array,object----->object

//advance javascript
//BigInt,symbol
var wiproturnover = BigInt(349254758525545);
console.log(typeof(wiproturnover));
var studentname = Symbol("teja");
var studentname =Symbol ("teja");
console.log(studentname == studentname);