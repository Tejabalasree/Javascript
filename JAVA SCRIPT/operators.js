//sample program on operators
let a = 10
let b = 20;
//arithmetic operators
//+,-,*,/,%
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(b/a);
console.log(a%b);


// relational operators
//<,>,<=,>=,==,!=
console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);
console.log(a==b);
console.log(a!=b);

//logical operators
//&&,||
console.log((a>10)&&(b<20));
console.log((a<10)||(b>10));

//assignment operators
//=,+=,-=,*=,/=,%=
let c = 30;
console.log(c);
console.log(c+=10);//c=c+10
console.log(c-=10);//c=c-10
console.log(c*=10);//c=c*10
console.log(c/=10);//c=c/10
console.log(c%=10);//c=c%10


//bitwise operators
//&,|
console.log(a&b);
console.log(a|b);
console.log(a^b);

//unary operator
//++,--
let d = 40;
console.log(d++);//40
console.log(++d);//42
console.log(--d),//42
console.log(d--);//40


//ternary operators
//?,:
const age = 14;
console.log((age>=18)?"you are eligible to votde":
"you are not eligible to vote");


