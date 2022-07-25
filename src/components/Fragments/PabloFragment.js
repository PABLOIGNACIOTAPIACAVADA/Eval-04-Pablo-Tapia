import React,{useState,useEffect} from "react"

const PabloFragment =({imagen,titulo,textoDescrip})=>{
    
    return(
        <>
        <div className="card" style={{width: "18rem"}}>
            <img src={imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{textoDescrip}</p>

                </div>
            </div>
        </>
    )

}

export default PabloFragment;