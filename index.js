function updateTime() {

    let d = new Date();

    let time = document.getElementById("time");
    let date = document.getElementById("date");


    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    if (minute < 10) {
        minute = "0" + minute;
    } else {
        minute = minute;
    }

    if (second < 10) {
        second = "0" + second;
    } else {
        second = second;
    }

    let timeString = hour + "." + minute + "." + second;

    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    let dateString = day + "." + month + "." + year;

    //console.log("Time updated");
    time.innerHTML = timeString;
    date.innerHTML = dateString;

    setTimeout(updateTime, 1000);
}

window.onload = updateTime();