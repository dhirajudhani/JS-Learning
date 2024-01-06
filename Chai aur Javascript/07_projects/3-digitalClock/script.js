const clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date();
    console.log(date.toLocaleDateString())
    // clock.appendChild(date);
    clock.innerHTML = date.toLocaleTimeString()
} , 1000)