import React from "react";

// function win () {
//   const win = document.querySelector(".icon");
//   const open = document.querySelector(".win")
//   win.addEventListener("click", () => {
//      open.classList.toggle("win-active");
//   })
// }

// win();

function Windows() {
  return (
    <div className="win">
      <div className="top">
        <input type="text" placeholder="Digite aqui para pesquisar" />
      </div>
      <div className="mid"></div>
      <div className="bot"></div>
    </div>
  );
}

export default Windows;