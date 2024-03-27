import React from "react";
import Filho from "./Filho";

export default (props)=>
    <div>
        <h2>Compotente</h2>
        <Filho {...props}>Assimiu</Filho>
        <Filho sobrenome={props.sobrenome}>Junior</Filho>
        <Filho sobrenome="Mané">Daniela</Filho>
    </div>