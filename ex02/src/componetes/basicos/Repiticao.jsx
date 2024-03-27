import React from "react";
import produto from "../../data/produto";

export default props =>{

    function getProdutos()
    {
        return (
            produto.map(prod =>{
                return <li key={prod.id}>{prod.id} - {prod.nome} - {prod.preco} Euros</li>
            })
        )
    }

    return (
        <div>
            <h3>Repitição</h3>
            <ul>
                {getProdutos()}
            </ul>
        </div>
    )
}