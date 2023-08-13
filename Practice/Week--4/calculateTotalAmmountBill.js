const calculateTotalAmmountBill = (billAmmount,discountPercentage) => {
    console.log(billAmmount - (billAmmount * discountPercentage ))
}

const ValidateBillAmmount = (billAmmount) => {
    if (billAmmount <= 0) {
        console.log("Bill Ammount can't be negative")
    }
    else{
        console.log("Bill Ammount is valid") 
    }
}

billAmmount=process.argv[2];
var discountPercentage=process.argv[3]; 

setTimeout(calculateTotalAmmountBill, 5000, billAmmount, discountPercentage);
ValidateBillAmmount(billAmmount);
