const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");

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