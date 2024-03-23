//                     !!!!! HARSH PATIDAR !!!!!!
// Set the target date and time for the countdown
const targetDate = new Date("April 14, 2024 24:0:00").getTime();

// trying to get time from user
// function gettime(){
// const a=document.getElementById("get").value;
// document.getElementById("output").innerHTML=a;
// }
// const targetDate= new Date(a).getTime();

setInterval(() => {
  const now = new Date().getTime();

  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    clearInterval();
    document.getElementById("end").innerHTML = "EXPIRED";
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
