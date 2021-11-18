import React from "react";
import './Card.css'

export default props => {

    const CardStyle = {
        backgroundColor: props.color || '#000',
        borderColor: props.color || "#000" 
    }

    return(
        <div className = 'card' style = {CardStyle}>
            <div className = 'title'>{props.titulo}</div>
            <div className = 'content'>
            {props.children}  
        </div>
        </div> 
    )
}