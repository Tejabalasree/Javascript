//sample program on variables
var sal = 60000;//global var

function totalsal()//function scope
{
    var sal = 60000;//local var
    var bonus = 5000;//local var
    console.log("sal with bonus;"+(sal+bonus));
}
totalsal();

console.log(sal);
function totalsal1()
{
    var medicalallow = 10000;//local
    console.log(sal+medicalallow);
}
totalsal1();

//let,const
//block scope
{
    let a = 10;
    const b = 70;
    console.log(a +" "+ b);
}

//var drawbacks
//drawback1
var productname = ":realme";
//let productname = "samsung";
console.log(productname);

//drawback2
for(let i=1;i<=10;i++)
{
    console.log("realme model:"+i);
}
//console.log("realme model:"+i);
