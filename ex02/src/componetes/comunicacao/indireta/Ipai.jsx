import React, {useState} from "react";
import Ifilho from "./Ifilho";

export default (props)=>
{
    const [valor, setValor] = useState(0)
    const [text, setText] = useState("Valor")

    function quandoClicar(valorGerado, txt)
    {
        setValor(valorGerado);
        setText(txt);
    }
    return (
        <div>
            <h4>{text}: {valor}</h4>
            <Ifilho onClicar={quandoClicar}></Ifilho>
        </div>
    )
}
    