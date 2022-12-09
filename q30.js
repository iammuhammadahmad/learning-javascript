// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
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
users.map(user=>{
    if(user.role == "Admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${user.username}, thank you for logging in again.`)
    }
});