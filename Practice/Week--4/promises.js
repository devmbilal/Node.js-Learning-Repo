const cart = ["apple", "orange", "banana"];

createOrder(cart).then((orderId)=>{
    console.log(orderId);
    return orderId;
}).
then((orderId)=>{
    return proceedtoPayment(orderId);
})
.then((paymentInfo)=>{
    console.log(paymentInfo);
})
.catch((err)=>{
    console.log(err.message);
});

/// Producer

function createOrder(cart){
    const pr=new Promise((resolve,reject)=>{
     if(!validateCart(cart)){
        const err = new Error("Invalid Cart");
        reject(err);
     }
    });
    const orderId = "12345";
    if(orderId){
    setTimeout(()=>{
        resolve(orderId);
    },5000);  
    } 
    return pr;
}

function proceedtoPayment(orderId){ 
    return new Promise((resolve,reject)=>{
        resolve("Payment Successfull");
    });
}

function validateCart(cart){
    return true;
}