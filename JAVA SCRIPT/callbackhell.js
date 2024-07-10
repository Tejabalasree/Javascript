//user payment
const didPayment = true;
const payment = () => {
    console.log("your payment is success");
} 
const userpayment = (didPayment,callback)  => {
    if (didPayment)
    {
        callback();
    }
    else{
        userpayment();
        if(didPayment)
        {
            callback();
        }
        else{
            userpayment();
            if(didPayment)
            {
                callback();

            }
            else{
                userpayment();
            }//else3
        }//else2
    }//else1
}//function closing
userpayment(didPayment,payment);