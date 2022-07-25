import React, {useEffect, useState} from "react"
import Pablito from  "../assest/images/pablo.png"


const Perfil = () => {


    return (
        <>
        <ul class="nav">
            <li class="nav-item">
            <a class="nav-link" href="http://localhost:3000/Blogger">◀Volver</a>
        </li>
            <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Pablo Tapia</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Mas información</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="http://localhost:3000/Comentarios">Comentarios</a>
        </li>
        </ul>
        <br/>
        <div className="container">
        <div className="row">
            <div className="col-6">
                <div className="card" style={{width: "18rem"}}>
                    <img src={Pablito} class="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4>Información sobre mí</h4>
                        <p className="card-text">Hola, mi nombre es Pablo Ignacio Tapia Cavada, tengo 19 años, actualmente soy estudiante de la carrera Tecnico Analista Programador en el Instituto Profesional Inacap, Calama.</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
        <br/>

        </>
    )
}

export default Perfil;