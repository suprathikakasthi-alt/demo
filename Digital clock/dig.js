let time=document.getElementById("time");
let date=document.getElementById("date");
let toggle=document.getElementById("toggleBtn");
let is24hourformat=true;


function updateTime(){

let now=new Date();
let hours=String(now.getHours()).padStart(2,'0');
let minutes=String(now.getMinutes()).padStart(2,'0');
let seconds=String(now.getSeconds()).padStart(2,'0');
let period="";

if(!is24hourformat){
  period=hours>=12?" PM":" AM";
  hours=String(hours%12||12).padStart(2,'0');
}

let day=now.getDate();
let month=now.getMonth()+1;
let year=now.getFullYear();

time.innerText=hours+":"+minutes+":"+seconds+period;
date.innerText=day+"/"+month+"/"+year;
}
function toggleFormat(){
  is24hourformat=!is24hourformat;
  if(is24hourformat){
    toggle.innerText="Switch to 12-hour format";
  }else{
    toggle.innerText="Switch to 24-hour format";
  }
  updateTime();
}
updateTime();
setInterval(updateTime,1000);