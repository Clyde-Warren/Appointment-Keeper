setInterval(()=>{
    let t = new Date();
    currentTime.innerHTML = t.toLocaleTimeString();
},1000);

// Finding the difference in time
let start = new Date();
let timeInFuture = new Date('21 February 2023 10:00');
let milliSeconds = timeInFuture - start;
let seconds = Math.floor(milliSeconds/1000);
let mins = Math.floor(seconds/60);


setInterval(()=>{
millSecs.innerHTML = `The seconds to 10am is ${mins} ${seconds}`;
// milliSeconds--;

seconds-- ;
}, 1000);
