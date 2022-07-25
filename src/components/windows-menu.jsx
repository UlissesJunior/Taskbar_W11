import React from "react";

const Windows = ({ active }) => {
  return (
    <div className={active ? "win win-active" : "win"}>
      <div className="top">
        <input type="text" placeholder="Digite aqui para pesquisar" />
      </div>
      <div className="mid"></div>
      <div className="bot"></div>
    </div>
  );
}

export default Windows;