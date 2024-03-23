import React from "react";
import "./index.css"
import "./App.css"
import Segundo from "./componetes/Segundo"
import Card from "./componetes/layout/Card";
import Repiticao from "./componetes/Repiticao";

export default (props)=>(
    <div className="App">
        <Card titulo="Primeiro Pato" color="#FF9800">
            <Segundo titulo="Primeiro" subtitulo="Este é o subtitulo deste exercicio, como podemos chegar a aprender react boas hoje"/>
        </Card>
    
        
        <Card titulo="Primeiro Ex1" color="#5755FE">
            <Segundo titulo="Primeiro" subtitulo="Este é o subtitulo deste exercicio, como podemos chegar a aprender react manter responsabilidade é muito importante e nao confiar nas minina de hoje é crucial para desenvolvimento pessoal e eu nao quero namorar com nnguém"/>
        </Card>

        <Card titulo="Repitiçao" color="#76885B">
            <Repiticao></Repiticao>
        </Card>

        <Card titulo="Repitiçao" color="#5F374B">
            <Repiticao></Repiticao>
        </Card>

    </div>
)
