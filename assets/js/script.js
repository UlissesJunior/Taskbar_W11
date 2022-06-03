function active() {
    const icons = document.querySelectorAll("div.icon");
    icons.forEach((icon) => { icon.addEventListener("click", () => {
        icon.classList.toggle("icon-active"); //Arrumar a bolinha do active por class
    }) });
} 
active();

function win () {
    const win = document.querySelector(".icon");
    const open = document.querySelector(".win")
    win.addEventListener("click", () => {
       open.classList.toggle("win-active");
    })
}

win();

function time () {
    var data = new Date();
    let hour = data.getHours();
    let minutes = data.getMinutes();

    if (minutes<10) {
        minutes = '0' + minutes;
    }

    let time = hour + ":" + minutes;
    console.log(time)
    //Data
    const date = data.toLocaleDateString();
    console.log(date)

    document.querySelector(".time").innerHTML = "<a>" + time + "</a>";
    document.querySelector(".date").innerHTML = "<a>" + date + "</a>";
}

time();