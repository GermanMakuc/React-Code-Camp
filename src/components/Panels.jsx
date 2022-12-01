import React from "react";
import '../styles/Panels.css';

// Exportación Nombrada
// Export function Panels
function Panels(props){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={require(`../images/${props.image}-testimonio.png`)} alt={ "Foto de " + props.image} />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{props.name}</strong> en {props.country}</p>
                <p className="cargo-testimonio">{props.occupation} en <strong>{props.company}</strong></p>
                <p className="texto-testimonio">"{props.testimony}"</p>
            </div>
        </div>
    );
}
// Expotación por Defecto
export default Panels;