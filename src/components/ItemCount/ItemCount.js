import { useState } from "react";
import './ItemCount.css';



export const ItemCount =({max, counter, setCounter, handleAgregar})=>{

    

    const handleSumar =()=>{
        if (counter < max){
            setCounter (counter+1)
        }
        
    }

    const handleRestar =()=>{
        if (counter>0){
            setCounter (counter-1)
        }
    }

return (
     <div className="botonera">
        <button onClick={handleRestar} className="botones">-</button>
        <span>{counter}</span>
        <button onClick={handleSumar} className="botones">+</button>
        <button onClick={handleAgregar} className="botones">Agregar</button>

     </div>

)
   

}

