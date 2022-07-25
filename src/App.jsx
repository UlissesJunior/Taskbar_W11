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
import { useState } from "react";

const icons = [
  {
    name: "Configurações",
    image: iconConfig,
    id: 1,
  },
  {
    name: "Explorador de Arquivos",
    image: iconExArc,
    id: 2,
  },
  {
    name: "Visual Studio Code",
    image: iconVsCode,
    id: 3,
  },
  {
    name: "Word",
    image: iconWord,
    id: 4,
  },
  {
    name: "Navegador Opera",
    image: iconOpera,
    id: 5,
  },
  {
    name: "Spotify",
    image: iconSpotify,
    id: 6,
  },
  {
    name: "Microsoft To Do",
    image: iconToDo,
    id: 7,
  },
];


function App() {
  const[active, setMode] = useState(false)
  const Toogle = () => {
    setMode(!active)
  } 
  return (
    <>
      <WinMenu active={active} icons={icons} />
      <div className="taskbar">
        <div className="icon">
          <img src={imgicon} onClick={Toogle} id="icon" alt="icone"/>
        </div>
        {icons.map((icons) => (
          <div key={icons.id} className={active ? "icon icon-active" : "icon"} onClick={Toogle}>
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