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