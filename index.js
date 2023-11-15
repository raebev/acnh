//Get Current Date
  //Var declarations, initialize before auto-updater
  const body = document.querySelector("body");
  const pageTime = document.querySelector("h2");
  const pageDate = document.querySelector("h3");
  let todaysDate = new Date();
  let currentMonth = todaysDate.getMonth() + 1;
  let currentDate = todaysDate.getDate();
  let currentDay = todaysDate.getDay();
  let currentHour = todaysDate.getHours();
  let currentMin = todaysDate.getMinutes();
  let amPM = "AM";
  let monthWritten = "Jan";
  let dayWritten = "Mon";

  //Current time function (auto-updater)
  function getDate(){
    todaysDate = new Date();
    currentMonth = todaysDate.getMonth() + 1;
    currentDate = todaysDate.getDate();
    currentDay = todaysDate.getDay();
    currentHour = todaysDate.getHours();
    currentMin = todaysDate.getMinutes();

    //Change month number to written month
      switch (currentMonth) {
        case 1:
          monthWritten = "Jan";
          break;
        case 2:
          monthWritten = "Feb";
          break;
        case 3:
          monthWritten = "Mar";
          break;
        case 4:
          monthWritten = "Apr";
          break;
        case 5:
          monthWritten = "May";
          break;
        case 6:
          monthWritten = "Jun";
          break;
        case 7:
          monthWritten = "Jul";
          break;
        case 8:
          monthWritten = "Aug";
          break;
        case 9:
          monthWritten = "Sep";
          break;
        case 10:
          monthWritten = "Oct";
          break;
        case 11:
          monthWritten = "Nov";
          break;
        case 12:
          monthWritten = "Dec";
          break;
      }

    //Change day number to written day
      switch (currentDay) {
          case 1:
            dayWritten = "Mon";
            break;
          case 2:
            dayWritten = "Tue";
            break;
          case 3:
            dayWritten = "Wed";
            break;
          case 4:
            dayWritten = "Thu";
            break;
          case 5:
            dayWritten = "Fri";
            break;
          case 6:
            dayWritten = "Sat";
            break;
          case 0:
            dayWritten = "Sun";
            break;
        }

//Date & time formatting
  //convert 24hr to 12hr, add am/pm functionality
    if (currentHour > 12){
      currentHour = currentHour - 12;
      amPM = "PM";
    } else{
      amPM = "AM"
    }
  //add 0 in front of minutes less than 10
    if (currentMin < 10){
    currentMin = `0${currentMin}`;
    }else{
    currentMin = currentMin;
    }

//Write date & time
pageTime.innerHTML = `${currentHour}:${currentMin} <span class="am-pm">${amPM}</span>`;
pageDate.innerHTML = `${monthWritten} ${currentDate} <span class="day-of-week">&nbsp;${dayWritten}.&nbsp;</span>`;

  }
  getDate();
  setInterval(getDate, 1000);
  
//Menu popup function
const menu = document.querySelector("#menu");
const arrow = document.querySelector("#arrow");
arrow.style.opacity= "0";

function popUp(){
    menu.style.display= "block";  
    arrow.style.opacity= "0";  
}

function close(){
  menu.style.display= "none";  
  arrow.style.opacity= "1"; 
}

//Menu popup event listener
  document.getElementById("arrow").addEventListener("click", popUp);

//Change background image based on current month
  body.style.backgroundImage=`url("assets/${currentMonth}.png")`;

//API connection
const apiKey = '2af030de-21b7-4936-ab6a-262a70286fc6';
const BASE_API_URI = "https://api.nookipedia.com/villagers";

let button = document.querySelectorAll("button");
let imageID = document.querySelector("#villager");
let chatBubb = document.querySelector("#chat-bubble");
let opt1 = document.querySelector("#quote");
let opt2 = document.querySelector("#sign");
let opt3 = document.querySelector("#species");
let opt4 = document.querySelector("#catchphrase");
let opt5 = document.querySelector("#nevermind");

for (let i=0; i<button.length; ++i) {
button[i].addEventListener("click", async (e) =>{
  nameID = button[i].id;
    const url = `${BASE_API_URI}?name=${nameID}`;
    const villagerInfo = await window.axios.get(url, {headers: {"X-API-KEY": apiKey}});
    console.log(villagerInfo);
    const villagerName = villagerInfo.data[0].name;
    const villagerImage = villagerInfo.data[0].image_url;
    const villagerQuote = villagerInfo.data[0].quote;
    const villagerSign = villagerInfo.data[0].sign;
    const villagerSpecies = villagerInfo.data[0].species;
    const villagerCatch = villagerInfo.data[0].phrase;
    const villagerBirthMonth = villagerInfo.data[0].birthday_month;
    const villagerBirthDay = villagerInfo.data[0].birthday_day;

    imageID.style.backgroundImage=`url("${villagerImage}")`;
    chatBubb.innerHTML=(`<p>Hi, <span style="color: #0eb8d2;">${villagerName}</span>!</p><br><br>`);
    arrow.style.opacity= "1"; 
    function quote(){
      close();
      chatBubb.innerHTML=(`<p>${villagerQuote}<br><br>`);
    }
    function sign(){
      close();
      chatBubb.innerHTML=(`<p>${villagerSign}<br><br>`);
    }
    function species(){
      close();
      chatBubb.innerHTML=(`<p>${villagerSpecies}<br><br>`);
    }
    function catchphrase(){
      close();
      chatBubb.innerHTML=(`<p>${villagerCatch}<br><br>`);
    }
    opt1.addEventListener("click", quote);
    opt2.addEventListener("click", sign);
    opt3.addEventListener("click", species);
    opt4.addEventListener("click", catchphrase);
    opt5.addEventListener("click", close);
});
}
