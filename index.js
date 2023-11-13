//Get Current Date
const todaysDate = new Date();
let currentMonth = todaysDate.getMonth() + 1;
let currentDate = todaysDate.getDate();
let currentYear = todaysDate.getFullYear();
const body = document.querySelector("body");

//Change background image based on current month
body.style.backgroundImage=`url("assets/${currentMonth}.png")`;

//Change month number to written month
let monthWritten = "January";
switch (currentMonth) {
    case 1:
      monthWritten = "Jamuary";
      break;
    case 2:
      monthWritten = "February";
      break;
    case 3:
      monthWritten = "March";
      break;
    case 4:
      monthWritten = "April";
      break;
    case 5:
      monthWritten = "May";
      break;
    case 6:
      monthWritten = "June";
      break;
    case 7:
      monthWritten = "July";
      break;
    case 8:
      monthWritten = "August";
      break;
    case 9:
      monthWritten = "September";
      break;
    case 10:
      monthWritten = "October";
      break;
    case 11:
      monthWritten = "November";
      break;
    case 12:
      monthWritten = "December";
      break;
  }

//Write date
const pageDate = document.querySelector("h1");
pageDate.innerHTML = `${monthWritten} ${currentDate}, ${currentYear}`;

//Menu popup function

function popUp(){
    const menu = document.querySelector("#menu");
    const arrow = document.querySelector("#arrow");
    menu.style.display= "block";  
    arrow.style.opacity= "0";  
}

//Menu event listener
document.getElementById("arrow").addEventListener("click", popUp);