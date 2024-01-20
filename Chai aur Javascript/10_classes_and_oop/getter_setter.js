class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    
    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const dhiraj = new User("@rfnj","abc")
console.log(dhiraj.password)