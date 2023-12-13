
function displayTime(){
    const currentTime = new Date();
    const timeNow = (`current_time:${currentTime.toLocaleTimeString()}`);
    console.log(timeNow);
}


setInterval(displayTime,1000)