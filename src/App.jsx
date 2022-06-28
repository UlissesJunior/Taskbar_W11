import React from "react";
import "./styles/style.css";

import Date from "./components/windows-date";
import WinMenu from "./components/windows-menu";

import imgicon from "./img/icons/png/win11.png";
import iconConfig from "./img/icons/png/iconConfig.png";
import iconExArc from "./img/icons/png/iconExArc.png";
import iconVsCode from "./img/icons/png/iconVsCode.png";
import iconWord from "./img/icons/png/iconWord.png";
import iconOpera from "./img/icons/png/iconOpera.png";
import iconSpotify from "./img/icons/png/iconSpotify.png";
import iconToDo from "./img/icons/png/iconToDo.png";

const icons = [
  {
    name: "Configurações",
    image: iconConfig,
  },
  {
    name: "Explorador de Arquivos",
    image: iconExArc,
  },
  {
    name: "Visual Studio Code",
    image: iconVsCode,
  },
  {
    name: "Word",
    image: iconWord,
  },
  {
    name: "Navegador Opera",
    image: iconOpera,
  },
  {
    name: "Spotify",
    image: iconSpotify,
  },
  {
    name: "Microsoft To Do",
    image: iconToDo,
  },
];

function active() {
  icons.isActive = !icons.isActive;
} 


function App() {
  return (
    <>
      <WinMenu icons={icons} />
      <div className="taskbar">
        <div className="icon">
          <img src={imgicon} id="icon" alt="icone"/>
        </div>
        {icons.map((icons) => (
          <div className={`icon ${icons.isActive && "icon-active"}`} onClick={active}>
            {/* {icons.name} */}
            <img src={icons.image} id="icon" alt="ico" />
            <div className="active"></div>
          </div>
        ))}
        <Date />
      </div>
    </>
  );
}

export default App;
