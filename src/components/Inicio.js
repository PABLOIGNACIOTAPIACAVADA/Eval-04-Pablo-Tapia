import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"


const Inicio = () => {
    return (
        <>
                <div class="card text-center">
          <div class="card-header">
            ¡Conoce sobre mi!
          </div>
          <div class="card-body">
            <h5 class="card-title">¡Te Damos la bienvenida a nuestro sitio!</h5>
            <p class="card-text">Presiona Ir al Blog para conocer sobre mi.</p>
            <a href="http://localhost:3000/Blogger" class="btn btn-primary">Ir Al Blog</a>
          </div>
        </div>
        </> 
    )
}

export default Inicio;