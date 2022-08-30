import { useState } from "react";
import './ItemCount.css';



export const ItemCount =({stock})=>{

    const [counter, setCounter] = useState (1)

    const handleSumar =()=>{
        if (counter < stock){
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
        <button className="botones">Agregar</button>

     </div>

)
   

}

