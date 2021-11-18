import React from "react";
import Produtos from '../../data/produtos'

export default props => {
    const list = Produtos.map(produto =>{
        return <li key = 'produtos'>
            {produto.id}) {produto.nome} - R${produto.preco}
        </li>
    })

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}