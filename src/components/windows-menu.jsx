import React from "react";

const Windows = ({ icons }) => {
  return (
    <div className={`win ${icons.isActive && "win-active"}`}>
      <div className="top">
        <input type="text" placeholder="Digite aqui para pesquisar" />
      </div>
      <div className="mid"></div>
      <div className="bot"></div>
    </div>
  );
}

export default Windows;