const fs = require('fs');

const loadUser=()=>{
    const buffer = fs.readFileSync('user.json');
    const data = buffer.toString();
    const user = JSON.parse(data);
    return user;
}

const addUser=(id,name)=>{
   const users=loadUser();

    const duplicateUser = users.filter((user)=>user.id===id);
    if(duplicateUser.length===0){
        users.push({
            id:id,
            name:name
        })
    }else{
        console.log('Duplicate user');
    }   
    saveUsers(users);
}

const saveUsers=(users)=>{
    const dataStr = JSON.stringify(users);
    fs.writeFileSync('user.json',dataStr);
}

const getAllUsers=()=>{
    const users=loadUser();
    users.forEach((user)=>{
        console.log(user.id,user.name);
    })          
}

const readUser=(title)=>{
    const users=loadUser(); 
    var user = users.find(user=>user.name===title);
    if (user){
        console.log(user.id,user.name);
    }else{
        console.log("User not found");
    }     
}

const removeUser=(title)=>{
    const users=loadUser();
    const  findIndex=users.findIndex(user=>user.name===title);
    if (findIndex!== -1) {
        users.splice(findIndex,1)
    }else{
        console.log("User not found");
    }   
    saveUsers(users);
}

module.exports={addUser,removeUser,getAllUsers,readUser};