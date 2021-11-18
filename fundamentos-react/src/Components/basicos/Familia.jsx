import React from "react";
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <div>
            <FamiliaMembro nome ='Pedro' sobrenome = {props.sobrenome} ></FamiliaMembro>
            <FamiliaMembro nome = 'Ana' sobrenome = {props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome = 'Gustavo' sobrenome = {props.sobrenome}></FamiliaMembro>
        </div>
    )
}