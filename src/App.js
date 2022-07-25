import React, {useState, useEffect} from 'react'  
import {Routes,Route,Link} from "react-router-dom";
import Inicio from './components/Inicio';
import Perfil from './components/Perfil';
import Blogger from './components/Blogger';
import Comentarios from './components/Comentarios';
const App=() => {
 return(
     <Routes>
         <Route path="/Inicio" element={<Inicio />} />
         <Route path="/Perfil" element={<Perfil />} />
         <Route path="/" element ={<Blogger/>}/>
         <Route path="/Blogger"element={<Blogger/>}/>
         <Route path="/Comentarios"element={<Comentarios/>}/>

         
     </Routes>
        )
}
export default App;