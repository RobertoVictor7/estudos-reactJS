import React from "react";

export default props => {
    return (
        <div>
            <div>
                filho
            </div>
            <button onClick = {function(e) {
                props.quandoClicar('José', 69, false)
            }}>Fornecer Informações</button>
        </div>
    )
}