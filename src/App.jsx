import React from "react";
import "./styles/style.css";
import "./script"
import Icon1 from "./img/win11.png"
// import Icon2 from "./img/"
// import Icon3 from "./img/"
// import Icon4 from "./img/"
// import Icon5 from "./img/"
// import Icon6 from "./img/"
// import Icon7 from "./img/"
// import Icon8 from "./img/"

function App() {
  return (
    <>
      <div class="win">
        <div class="top">
          <input type="text" placeholder="Digite aqui para pesquisar" />
        </div>
        <div class="mid"></div>
        <div class="bot"></div>
      </div>
      {/* <div class="wpp-engine"></div> */}
      <div class="taskbar" onselectstart="return false">
        <div class="icon">
          <img src={Icon1} id="icon" alt="icon1" />
        </div>
        <div class="icon">
          <img
            src={Icon1}
            id="icon"
            class="wpp"
            alt="icon2"
          />
          <div class="active"></div>
        </div>
        <div class="icon">
          <img src={Icon2} id="icon" alt="icon3" />
          <div class="active"></div>
        </div>
        <div class="icon">
          <img src={Icon1} id="icon" alt="icon4" />
          <div class="active"></div>
        </div>
        <div class="icon">
          <img src={Icon1} id="icon" alt="icon5" />
          <div class="active"></div>
        </div>
        <div class="icon">
          <img src={Icon1} id="icon" alt="icon5" />
          <div class="active"></div>
        </div>
        <div class="icon">
          <img src={Icon1} id="icon" alt="icon7" />
          <div class="active"></div>
        </div>
        <div class="icon">
          <img src={Icon1} id="icon" alt="icon8" />
          <div class="active"></div>
        </div>
        <div class="task-date">
          <div class="container-date">
            <div class="time"></div>
            <div class="date"></div>
          </div>
          <div class="container-moon">
            <div class="moon"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
