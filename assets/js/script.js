function active() {
    const icon = document.querySelector("body div.icon");
    console.log(icon)
    icon.classList.toggle("icon-active")
}
//Arrumar para pegar funcionar em todas com o QuerySelectorAll e não só a primeira