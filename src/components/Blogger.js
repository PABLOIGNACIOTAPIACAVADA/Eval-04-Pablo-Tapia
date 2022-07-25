import React, {useEffect, useState} from "react"
import Pablito2 from "../assest/images/pablo2.png"
import Pablito3 from "../assest/images/pablo3.png"
import Pablito4 from "../assest/images/pablo4.png"
import PabloFragment from "./Fragments/PabloFragment"


const Blog=() =>{
    return(
        <>
        <ul class="nav">
            <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Pablo Tapia</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="http://localhost:3000/Perfil">Mas información</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="http://localhost:3000/Comentarios">Comentarios</a>
        </li>
        </ul>
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <h3> Biografía:</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="card" style={{width: "18rem" }}>
                            <img src={Pablito2} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Especialidades</h5>
                                <p className="card-text"> ✔Desarrollador de proyectos informáticos, Gestor de Base de Datos.</p>
                                <p className="card-text"> ✔Soporte TI.</p>
                         
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={Pablito3} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Ciudad Natal</h5>
                                <p className="card-text">Tierra Amarilla es una ciudad y comuna del Norte Chico de Chile ubicada a 15 kilómetros de Copiapó, en la Región de Atacama.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4" >
                        <PabloFragment 
                        textoDescrip="Terminar mis estudios y trabajar en lo que más me gusta, la informática. Entre mis prioridades se encuentra la indendización total."
                        
                        imagen={Pablito4}
                        titulo="Metas"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}



export default Blog;
