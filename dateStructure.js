// Create a function/s that can customize a date object based on imputs recieved

/*
get the full year
get the month
get the day value and convert it into an actual day
*/

const 
daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemdber', 'December'],
testTime = '13:00',




m = new Date().getMonth(),
d = new Date().getDay(),
y = new Date().getFullYear(),
date = new Date().getDate()


function assignMonth(num){
    return monthsOfTheYear[num];
}



function assignDay(num){
    return daysOfTheWeek[num];
}

const startTime = new Date(`${new Date().getDay()} ${new Date().getMonth()} ${date} ${new Date().getFullYear()}`);
console.log(startTime);