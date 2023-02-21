let timerInterval
const hourDisplay = document.getElementById('hour'),
      minDisplay = document.getElementById('mins'),
      secDisplay = document.getElementById('secs')

const countDownDate = new Date().setSeconds(new Date().getSeconds() + 10000);

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

window.addEventListener('load', () => {
    startCountDown();
    timerInterval = setInterval(() => {
        startCountDown()
    }, 1000)
});