// Immediately invoked funtion expression (iife)

// why to use => global scope ke pollution kai baar use se bach ne ke liye hum use kr te iife

(function chai(){
    // named iife 
    console.log(`DB connected`)
})();

(()=>{
    console.log(`hello`)
})();

((name)=>{
    console.log(`hello ${name}`)
})('dhiraj');