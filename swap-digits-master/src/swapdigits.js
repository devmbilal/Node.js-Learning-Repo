const swapDigits = (number)=>{
    let swappedNumber = 0
    //write logic here
    number=number.toString();
    let length=number.length;
    if (number[0]=='-' || length==1) {
       swappedNumber=0;
    }
    else{
        let str='';
    switch (length%2) {
        case 0 :
            for (let index = 0; index < number.length; index+=2) {
                
                // let temp = number[index];
                // number[index]=number[index+1];
                // number[index+1]=temp;
                str+=number[index+1];
                str+=number[index];
            }
            break;
        case 1 :
            str+=number[0];
            for (let index = 1; index < number.length; index+=2) {
                
                // let temp = number[index];
                // number[index]=number[index+1];
                // number[index+1]=temp;
                str+=number[index+1];
                str+=number[index];
            }
            break;
        
    }
    swappedNumber=parseInt(str);
    }
    return swappedNumber;
    
}

module.exports = swapDigits
