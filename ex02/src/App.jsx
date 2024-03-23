import React from "react";
import "./index.css"
import "./App.css"
import Segundo from "./componetes/Segundo"
import Card from "./componetes/layout/Card";
import Repiticao from "./componetes/Repiticao";

export default (props)=>(
    <div className="App">
        <Card titulo="Primeiro Ex1">
            <Segundo titulo="Primeiro" subtitulo="Este é o subtitulo deste exercicio, como podemos chegar a aprender react boas hoje"/>
        </Card>
    
        
        <Card titulo="Primeiro Ex1">
            <Segundo titulo="Primeiro" subtitulo="Este é o subtitulo deste exercicio, como podemos chegar a aprender react manter responsabilidade é muito importante e nao confiar nas minina de hoje é crucial para desenvolvimento pessoal e eu nao quero namorar com nnguém"/>
        </Card>

        <Card titulo="Repitiçao">
           <Repiticao></Repiticao>
        </Card>
    </div>
)
