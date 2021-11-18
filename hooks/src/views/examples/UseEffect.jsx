import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

function calcParImpar(num){
    const n = parseInt(num)
    if(n == 0) return "..."
    if(n % 2 == 0) return "Par"
    if(n % 2 != 0) return "Impar" 
}


const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    const [initial, setInitial] = useState(1)
    const [state, setState] = useState("...")

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function(){
        setState(calcParImpar(initial))
    }, [initial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"/>
            <SectionTitle title= "Exercicio #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" className="input"
                value = {number} onChange={e => setNumber(e.target.value)}/>
            </div>
            
            <SectionTitle title= "Exercicio #02"/>
            <div className="center">
                <div>
                    <span className="text">status: </span>
                    <span className="text red">{state}</span>
                </div>
                <input type="number" className="input" 
                value = {initial} onChange = {e => setInitial(e.target.value)} />
            </div>

        </div>
    )
}

export default UseEffect
