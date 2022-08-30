import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getData } from '../../helpers/getData.js'

export const ItemListContainer = (props)=> {
    
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
     
       
   useEffect(()=>{
   
       getData ()
       .then(res => {
        setProductos(res);
        setLoading(false);
       })
       .catch(error=>console.log(error))
   },[])   
   
     return (
               
        <div>
            <h5 className="titulo">Best Cupcakes - {props.greeting}</h5>
           <ItemList loading={loading} productos={productos}/> 
        </div>
    )

}


