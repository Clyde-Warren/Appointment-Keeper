// Create a function/s that can customize a date object based on imputs recieved

/*
get the full year
get the month
get the day value and convert it into an actual day
*/

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemdber', 'December'];
let m = new Date().getMonth();
let d = new Date().getDay();
let y = new Date().getFullYear();
let date = new Date().getDate()
const testTime = '13:00';
const now = new Date();
const startTime = new Date(`${assignDay(d)} ${assignMonth(m)} ${date} ${y}, ${testTime}`);
const difference = startTime - now;







function assignMonth(num){
    return monthsOfTheYear[num];
}



function assignDay(num){
    return daysOfTheWeek[num];
}


console.log(startTime);
console.log(difference)