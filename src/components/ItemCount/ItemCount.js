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
        <button onClick={handleRestar} disabled={counter === 1}className="botones">-</button>
        <span className='botonesCounter'>{counter}</span>
        <button onClick={handleSumar} className="botones" disabled={counter === max}>+</button>
        <button onClick={handleAgregar} className="botonesCounter">Agregar</button>
     </div>
)

}

