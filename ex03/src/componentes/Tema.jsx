import React from "react";
import "./Tema.css"

export default props =>
    <div className="Tema" style={{borderColor: props.color || "#000"}}>
        <h3 className="titulo" style={{backgroundColor: props.color || "#000", color: props.color == "#fff" ? "#000" : "#fff"}}>{props.titulo}</h3>
        <div className="corpo">{props.children}</div>
    </div>