const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const buttonShowTime = document.querySelector(".btn-showTime");
const clock = document.querySelector(".clock");
const clockDigital = document.querySelector(".clock-digital");
const dateDigital = document.querySelector(".date-digital");
const picture = document.querySelector(".picture");
const bgColor = document.querySelector(".bg-color");
const startImg = document.querySelector(".start-img");
const dotColor = document.querySelector(".color-dot");
const appleWatch = document.querySelector(".apple-watch");
const colorLabelBlue = document.querySelector(".color-label-blue");
const colorLabelRed = document.querySelector(".color-label-red");
const colorLabelBlack = document.querySelector(".color-label-black");
const firstDot = document.querySelector(".first-dot");
const secondDot = document.querySelector(".second-dot");
const thirdDot = document.querySelector(".third-dot");


const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  let secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // console.log(secondsDegrees);

  const minutes = now.getMinutes();
  let minutesDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  //    console.log(minutes);

  const hours = now.getHours();
  let hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  //    console.log(hours);

  if (seconds === 0) {
    secondsDegrees = 90;
    secondHand.style.transition = `none`;
  } else {
    secondHand.style.transition = `all 0.05s`;
  }
};

setInterval(setDate, 1000);
setDate();

const showTime = () => {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  if (hours > 24) {
    hours = hours - 24;
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + minutes;

  document.getElementById("digital-display").innerText = time;
  document.getElementById("digital-display").textContent = time;
  setTimeout(showTime, 1000);
};

showTime();

const showDate = () => {
  let now = new Date();
  let days = now.getDay();
  let month = now.getMonth();
  let dayNr = now.getDate();

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
    case 6:
      day = "SAT";
  }

  dayNr = dayNr < 10 ? "0" + dayNr : dayNr;
  let date = day + " " + dayNr;

  document.getElementById("day-month").innerText = date;
  document.getElementById("day-month").textContent = date;
};

showDate();


const watchMenu = () => {
  clock.classList.toggle("active");
  clockDigital.classList.toggle("active");
  dateDigital.classList.toggle("active");
  picture.classList.toggle("active");
  bgColor.classList.toggle("active");
  startImg.classList.toggle("active");
  
  //   clock.style.display = "none";
}


const animatedFadeIn = () => {
  clock.classList.toggle("fade-in");
  clockDigital.classList.toggle("fade-in");
  dateDigital.classList.toggle("fade-in");
  picture.classList.toggle("fade-in");
  bgColor.classList.toggle("fade-in");
  startImg.classList.toggle("fade-in");
 

} 

const changeWatchColorBlue = () => {
  appleWatch.classList.toggle("color-blue");
  firstDot.classList.toggle("color-blue");
  colorLabelBlue.classList.toggle("display-block");
}
const changeWatchColorRed = () => {
  appleWatch.classList.toggle("color-red");
  secondDot.classList.toggle("color-red");
  colorLabelRed.classList.toggle("display-block");

}
const changeWatchColorBlack = () => {
  appleWatch.classList.toggle("color-black");
  thirdDot.classList.toggle("color-black");
  colorLabelBlack.classList.toggle("display-block");

}




buttonShowTime.addEventListener("click", watchMenu);
buttonShowTime.addEventListener("click", animatedFadeIn);
firstDot.addEventListener("click", changeWatchColorBlue );
secondDot.addEventListener("click", changeWatchColorRed );
thirdDot.addEventListener("click", changeWatchColorBlack );