function User(email, password){
    this._password = password
    this._email  = email

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value
        }
    })
}

 const dhiraj = new User("hello",123)
 console.log(dhiraj.email)
