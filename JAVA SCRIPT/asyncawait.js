//user payment
const didPayment = true;
const payment = async()  =>  {
    try{
        if (didPayment)
        {
            console.log("payment success");
        }
    }
    catch(err)
    {
        console.log("some errer!!!");
    }
}
payment();