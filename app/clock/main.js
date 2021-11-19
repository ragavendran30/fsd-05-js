function difference(){
    //TODO: Find date time hours minutes seconds between date now and date target
    // Find the distance between now and the count down date
    let now = new Date().getTime();//current date and time
    let countDownDate = new Date('jan1 2022 12:00:00').getTime();//target date
    


    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(days, hours, minutes, seconds);
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

};
 


// how to call current interval in  regular interval
setInterval(difference, 1000);
