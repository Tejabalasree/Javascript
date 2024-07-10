//user payment
const didPayment = true;
const payment = new Promise((resolve,reject)   =>{
    if (didPayment)
    {
        resolve();
    }
    else{
        reject();
    }
} );
payment.then(()=>{
    console.log("payment success")
}).catch(()=>{
    console.log("payment failed");
})

