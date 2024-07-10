//to display multiple product
//for
for (let i=1;i<=10;i++)
{
    console.log("realme model:"+i);
}


//while
let j = 1;
while(j<=10)
{
    console.log("samsung model:"+j);
    j++;
}


//do-while
let k = 1;
do{
    console.log("dell model:"+k);
    k++
}while(k<=10);

//advanceloops(es6)
//for-of,for-in
//for-of is used to get elements from an array
const products = ["realme","dell","samsung","lenovo"];
for (let product of products) 
{
    console.log(product);

}    


//for-in loop is used to get elements from an objects
const employeeinfo = {
    eid:1602,
    ename:"teja",
    esal:20000,
}
for(let employee in employeeinfo)
{
    console.log(employeeinfo[employee]);
} 
    

  //for loop program
  for(i=0;i<=products.length;i++)
  {
    console.log(products[i]);
  }  
    
    
    
    
    
    
    
    
    
    
    
    
    
    