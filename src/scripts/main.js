AOS.init();

const date = new Date("Dec 31, 2023 19:00");
const timeStanp = date.getTime();

const counttime = setInterval(function(){
    const now = new Date();
    const timeStanpNow = now.getTime();

    const dif = timeStanp - timeStanpNow;

    let days = Math.floor(dif / (60 * 60 * 24 * 1000));
    let hours = Math.floor((dif % (60 * 60 * 24 * 1000)) / (1000*60*60));
    let minutes = Math.floor((dif % (60 * 60 * 1000)) / (1000*60));

    document.getElementById("contador").innerHTML = `${days} d, ${hours} h, ${minutes} min.`
}, 1000)