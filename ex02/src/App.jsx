import React from "react";
import "./index.css"
import "./App.css"
import Segundo from "./componetes/basicos/Segundo"
import Card from "./componetes/layout/Card";
import Repiticao from "./componetes/basicos/Repiticao";
import Pai from "./componetes/comunicacao/direta/Pai";
import Input from "./componetes/forms/Input";
import Ipai from "./componetes/comunicacao/indireta/Ipai";
import Contador from "./componetes/contador/Contador"

export default (props)=>(
    <div className="App">

        <h1>Exercicios React</h1>

        <div className="Cards">
            <Card titulo="Primeiro Pato" color="#FF9800">
                <Segundo titulo="Primeiro" subtitulo="Este é o subtitulo deste exercicio, como podemos chegar a aprender react boas hoje"/>
            </Card>
        
            
            <Card titulo="Primeiro Ex1" color="#5755FE">
                <Segundo titulo="Primeiro" subtitulo="Este é o subtitulo deste exercicio, como podemos chegar a aprender react manter responsabilidade é muito importante e nao confiar nas minina de hoje é crucial para desenvolvimento pessoal e eu nao quero namorar com nnguém"/>
            </Card>

            <Card titulo="Repitiçao" color="#76885B">
                <Repiticao/>
            </Card>

            <Card titulo="Repitiçao" color="#5F374B">
                <Repiticao/>
            </Card>

            <Card titulo="Cominicação direta" color="#007F73">
                <Pai sobrenome="Sadjo"/>
            </Card>
            
            <Card titulo="Cominicação indireta" color="#240A34">
                <Ipai sobrenome="Sadjo"/>
            </Card>

            <Card titulo="Cominicação indireta" color="#FF3EA5">
                <Input/>
            </Card>

            <Card titulo="Cominicação indireta" color="#FFBE98">
                <Contador passo={5} valor={2}></Contador>
            </Card>
        </div>
       
    </div>
)
