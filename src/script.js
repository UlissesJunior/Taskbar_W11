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