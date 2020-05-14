const users = [
    {
        login: "volfen",
        email: "volfen27@gmail.com",
        password: "qwerty"
    },
]

function addUser (login, email, password) {
    users.push({
        login,
        password,
        email
    })
}

function checkCompatibility(login, password, email = "") {
    let result
    if(email === ""){
        users.filter(user => {
            return result = (user.login === login && user.password === password) ? true : false 
        })
    }else{
        users.filter(user => {
            return result = (user.login === login || user.email === email) ? false : true 
        })
    }
    return result
}
export { users, addUser, checkCompatibility };


// export default {
//     users: [],
//     getdupa: function () {
//         this.users
//     }
// }

// export default class {
//     static users = []

//     getdupa = () => {
//         this.users
//     }
// }