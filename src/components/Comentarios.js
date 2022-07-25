import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import Comentario from "./Comentarios"

const Comentarios = () => {
    return (
        <>
         <div class="card text-center">
          <div class="card-header">
            ¡Bienvenido a la zona de comentarios!
          </div>
          <div class="card-body">
          <label htmlFor="usuario"><h2>Comenta que te pareció</h2></label>
          <hr></hr>

            <input type="text"
            />
            <input type="checkbox"
                   name="terminos"/>

            <label htmlFor="terminos">Agregar Emoticon👍</label> <br/>
            <br/>
            <button type="button" onClick={Comentario}>Enviar</button>
            
            <ul className="list-group">
            <br/>   
                <li className="list-group-item active" aria-current="true">Te damos algunas referencias:</li>
                <li className="list-group-item">Bastante Interesante</li>
                <li className="list-group-item">Aburrido</li>
                <li className="list-group-item">Muy Bueno</li>
                <li className="list-group-item">Bueno</li>
            </ul>

            
          </div>
        </div>

        </> 
    )
}

export default Comentarios;