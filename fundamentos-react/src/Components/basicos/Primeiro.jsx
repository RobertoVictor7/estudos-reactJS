import React from "react"

//componente funcional, componente baseado em função.
//export default para exportar a versao para outro local.
export default function Primeiro() {
    const msg = 'Seja bem vindo(a)'
    return ( //para identar precisamos envolver com parenteses
     <div>
        <h2>Primeiro Componente</h2>
        <p>{msg}</p>
        </div>
    )
}