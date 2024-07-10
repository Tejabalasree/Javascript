//nested object
const cart ={
    cartwithoffers:"10%",
    product:[
        {pid:1001,pname:"lg",price:30000},
        {pid:1002,pname:"samsung",price:40000},
    ],
    shippingAddressline:{
        addressLine1:"banjarahills",
        addressLine2:"near dmart,hyderabad",
    },
    userInfo:{
        userid:3001,
        username:"nobita"
    }
}
console.log(cart.cartId);
console.log(cart.product[0]);
//try to get all product values
//for-of loop
console.log(cart.shippingAddressline.addressLine1);
console.log(cart.userInfo);