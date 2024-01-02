// this kya hai ? -> current context ko refer karta hai

const user = {
    username : "dhiraj",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
    }
}