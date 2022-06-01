function active() {
    const icons = document.querySelectorAll("div.icon");
    icons.forEach((icon) => { icon.addEventListener("click", () => {
        icon.classList.toggle("icon-active");
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