let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

 setInterval(()=>{
    let currentDate = new Date();
    hour.innerHTML = (currentDate.getHours()<10?"0":"") + currentDate.getHours();
    min.innerHTML = (currentDate.getMinutes()<10?"0":"") + currentDate.getMinutes();
    sec.innerHTML = (currentDate.getSeconds()<10?"0":"") + currentDate.getSeconds();
 },1000)
