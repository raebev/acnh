//Get Current Date
const todaysDate = new Date();
let currentMonth = todaysDate.getMonth() + 1;
let currentDate = todaysDate.getDate();
const body = document.querySelector("body");

//Change background image based on current month
body.style.backgroundImage=`url("assets/${currentMonth}.png")`;