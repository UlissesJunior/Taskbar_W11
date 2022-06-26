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

function background () {
    var bg = document.getElementsByClassName('wpp')
    var wpp = document.getElementsByClassName('wpp-engine')
    bg.addEventListener("click", () => {
        wpp.style.cssText = `
        visibility: visible;
    `   
    })
}

background();

// function right_click() {
//     const body = document.querySelector("body");
//     body.addEventListener("scroll", () => {
//         body.classList.toggle(".wpp-engine")
//     })
// }

// right_click();