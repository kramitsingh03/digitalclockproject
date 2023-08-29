let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

 setInterval(()=>{
    let currentDate = new Date();
    hour.innerHTML = currentDate.getHours();
    min.innerHTML = currentDate.getMinutes();
    sec.innerHTML = currentDate.getSeconds();
 },1000)
