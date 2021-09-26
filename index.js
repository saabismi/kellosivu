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
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    let dateString = day + "." + month + "." + year;

    //console.log("Time updated");
    time.innerHTML = timeString;
    date.innerHTML = dateString;

    setTimeout(updateTime, 1000);
}

window.onload = updateTime();

function changeColor(color) {
    if(color == "red") {
        document.body.style.backgroundColor = "#db2c4c";
    } else if(color == "black") {
        document.body.style.backgroundColor = "#000";
    } else if (color == "violet") {
        document.body.style.backgroundColor = "#2f2453";
    } else if (color == "green") {
        document.body.style.backgroundColor = "#08802a";
    } else {
        document.body.style.backgroundColor = "#2f2453";
    }
}