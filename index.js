let timerInterval
const hourDisplay = document.getElementById('hour');
const minDisplay = document.getElementById('mins');
const secDisplay = document.getElementById('secs');
const apptDescription = document.getElementById('description');
const startTimeDisplay = document.getElementById('start-time');
const endTime = document.getElementById('end-time');
let start = '';
const actualStartTime = new Date();

/*Variables to set the count down for next Appointment */
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemdber', 'December'];
let m = new Date().getMonth();
let d = new Date().getDay();
let y = new Date().getFullYear();
let date = new Date().getDate()
const testTime = start;
const now = new Date();
const startTime = new Date(`${assignDay(d)} ${assignMonth(m)} ${date} ${y}, ${testTime}`);
const difference = (startTime - now)/1000;
/**************************************************************************************** */
let duration = 10000;
let timeUntilNextAppt = 100; //startTime.value - timeNow
const saveAppt = document.getElementById('save');

func1 = () => {
// document.getElementById('testp').innerHTML = apptDescription.value;
    start = startTimeDisplay;
};

saveAppt.addEventListener('click', func1);
      
//**********************************CountDown Component****************************
const countDownDate = new Date().setSeconds(new Date().getSeconds() + 0);

const startCountDown = () => {
    const now = new Date().getTime();
    const countDown = new Date(countDownDate).getTime();
    const difference = (countDown - now)/1000;

    let hours = Math.floor(difference/(60*60));
    let mins = Math.floor((difference % (60*60))/60);
    let seconds = Math.floor(difference % (60));
    
    hourDisplay.innerHTML = hours;
    minDisplay.innerHTML = mins;
    secDisplay.innerHTML = seconds;
}

saveAppt.addEventListener('click', () => {
    startCountDown();
    timerInterval = setInterval(() => {
        startCountDown()
    }, 1000)
});

const reset = clearInterval(timerInterval);
const resetBtn = document.getElementById('reset');
function resetTimer(){
    difference = 0;
}

resetBtn.addEventListener('click', resetBtn);
//********************************************************************************** */

function assignMonth(num){
    return monthsOfTheYear[num];
}



function assignDay(num){
    return daysOfTheWeek[num];
}


console.log(startTime);
console.log(difference)