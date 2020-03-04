const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPosition = 10;
let minPosition = 110;
let secPosition = 210;

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hours: " + hr + " Minutes: " + min + " Seconds: " + sec);

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
