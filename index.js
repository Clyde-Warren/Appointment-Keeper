let timerInterval
const hourDisplay = document.getElementById('hour');
const minDisplay = document.getElementById('mins');
const secDisplay = document.getElementById('secs');
const apptDescriptionInput = document.getElementById('description');
const startTimeInput = document.getElementById('start-time');//Time recieved from user input
const endTime = document.getElementById('end-time');
const saveApptBtn = document.getElementById('save');//Intended to save the appointment
const resetBtn = document.getElementById('reset');
const desc = document.getElementById('desc');
const st = document.getElementById('st');
const et = document.getElementById('et');

/*Variables to set the count down for next Appointment */
const daysOfTheWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const monthsOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let month = monthsOfTheYear[new Date().getMonth()];//returns a string with the month eg: Feb
let day = daysOfTheWeek[new Date().getDay()];//returns a string with the day eg: Mon
let year = (new Date().getFullYear()).toString();//return a string with the year eg:2023
let date = (new Date().getDate()).toString();//return a string with the date eg:25
// console.log(typeof year);
let dateString = `${day} ${month} ${date} ${year}`;
let difference = 0;
let newTime = ' '


let startTime = () => {
    let time = startTimeInput.value; //input of time entered by user eg: "08:30"
    dateString = dateString.concat(' '+time);// output "Mon Feb 25 2023 08:30"
    // desc.innerHTML = apptDescriptionInput.value;
    // st.innerHTML = time;
    difference = (new Date(dateString) - new Date)/1000;
    let countDownDate = new Date().setSeconds(new Date().getSeconds() + difference);
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
     startCountDown();
    timerInterval = setInterval(() => {
        startCountDown()
    }, 1000)
    
}

saveApptBtn.addEventListener('click', startTime);




/********************************************************************************* */



      
//**********************************CountDown Component****************************





const reset = clearInterval(timerInterval);

function resetTimer(){
    difference = 0;
}

resetBtn.addEventListener('click', resetBtn);
//********************************************************************************** */



