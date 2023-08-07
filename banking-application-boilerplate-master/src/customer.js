const category = require("./category");

var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      let notAdded=customerList.find(customer=>customer[0]==CustomerId);
      if (!notAdded) {
            // customerList.push({Id:CustomerId,name:CustomerName,age:CustomerAge,
            // address:CustomerAddress,contact:CustomerContactNumber,category:Category});
            customerList.push([CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category])
      }
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      let customer=customerList.find(customer=>customer[0]==CustomerId);
      if (customer) {
      //      customer.name=CustomerName;
      //      customer.age=CustomerAge;
      //      customer.address=CustomerAddress;
      //      customer.contact=CustomerContactNumber;
      //      customer.Category=Category;
           customer[1]=CustomerName;
           customer[2]=CustomerAge;
           customer[3]=CustomerAddress;
           customer[4]=CustomerContactNumber;
           customer[5]=Category;
      } 
}

const getAllCustomers=()=>{
  return customerList;
}

module.exports={addCustomer,updateCustomer,getAllCustomers}