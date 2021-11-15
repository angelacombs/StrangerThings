
/*End date for countdown (getTime in milleseconds).*/
let launchDate = new Date("Jan 1, 2022 12:00:00").getTime();

/*Coding for timer. Every 1 second.*/
let timer = setInterval(tick, 1000);

function tick () {
    /*Current time.*/
    let now = new Date().getTime();

    /*Difference in time to time left until 0 remains.*/
    let t = launchDate - now;

    /*Check if time is above 0.*/
    if (t > 0) {
        /*Setup days, hours, seconds and mins. Algorithm to calculate days.*/
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        
        /*Prefix any number below 10 with a "0".*/
        if (days < 10> { days = "0" + days; }
        
        /*Calculate hours.*/
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours = "0" + hours; }

        /*Calculate minutes.*/
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) { mins = "0" + mins; }

        /*Calculate seconds.*/
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) { secs = "0" + secs; }

        /*Code for time string.*/
        let time = '${days} : ${hours} : ${mins} : ${secs}';

        /*Show time on page.*/
        document.querySelector('.countdown').innerText = time;

    }
}
