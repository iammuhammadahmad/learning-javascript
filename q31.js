users = [
    {
        username: "Ahmad",
        role: "Admin"
    },
    {
        username: "Afzal",
        role: "Accountant"
    },
    {
        username: "Ahmad",
        role: "Manager"
    }
]

if(users.length == 0){
    console.log("We need to find some users!")
}else{
    //  remove all members from array
    console.log("Remove user untill array empty")
    users.length = 0;
    if(users.length == 0){
        console.log("We need to find some users!")
    }
}