const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const buttonShowTime = document.querySelector(".btn-showTime");
const clock = document.querySelector(".clock");
const clockDigital = document.querySelector(".clock-digital");
const dateDigital = document.querySelector(".date-digital");

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  let secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
// console.log(secondsDegrees);

   const minutes = now.getMinutes();
   let minutesDegrees = ((minutes / 60) * 360) + 90;
   minHand.style.transform = `rotate(${minutesDegrees}deg)`
//    console.log(minutes);

   const hours = now.getHours();
   let hoursDegrees = ((hours / 12) * 360) + 90;
   hourHand.style.transform = `rotate(${hoursDegrees}deg)`
//    console.log(hours);

if (seconds === 0){
    secondsDegrees = 90;
    secondHand.style.transition = `none`
}else {
    secondHand.style.transition = `all 0.05s`

}



};

setInterval(setDate, 1000);
setDate();

const showTime = () => {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    if (hours > 12) {
        hours = hours - 12;
    }
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes ;

    document.getElementById("digital-display").innerText = time;
    document.getElementById("digital-display").textContent = time;
    setTimeout(showTime, 1000);
  
}

showTime();


const showDate = () => {
    let now = new Date();
    let days = now.getDay();
    let month = now.getMonth();

   
    
    setTimeout(showDate, 1000);
let day;
    switch (days) {
        case 0:
          day = "SUN";
          break;
        case 1:
          day = "MON";
          break;
        case 2:
          day = "TUE";
          break;
        case 3:
          day = "WED";
          break;
        case 4:
          day = "THU";
          break;
        case 5:
          day = "FRI";
          break;
        case  6:
          day = "SAT";
}

month = (month < 10) ? "0" + month : month;
let date = day + " " + month ;


document.getElementById("day-month").innerText = date;
document.getElementById("day-month").textContent = date;
}


showDate();

buttonShowTime.addEventListener("click", watchMenu);


function watchMenu() {
  clock.classList.toggle("active");
  clockDigital.classList.toggle("active");
  dateDigital.classList.toggle("active");
//   clock.style.display = "none";
}



function closeMenu() {
  clock.classList.remove("active");
  clockDigital.classList.remove("active");
  dateDigital.classList.remove("active");
  
//   clock.style.display = "block"
}


