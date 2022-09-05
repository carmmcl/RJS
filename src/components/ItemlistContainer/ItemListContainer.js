import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getData } from '../../helpers/getData.js'
import { useParams } from 'react-router-dom'

export const ItemListContainer = (props)=> {
    
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    const { categoryId } = useParams ()
     
       
   useEffect(()=>{
   
    setLoading(true) 
       getData ()
       .then(res => {
        if(!categoryId) {
            setProductos(res)
        }else{
            setProductos (res.filter((prod)=> prod.category === categoryId))
        }
        
        setLoading(false);
       })
       .catch(error=>console.log(error))
   },[categoryId])   
   
     return (
               
        <div>
            <h5 className="titulo"> Best Cupcakes - {props.greeting}</h5>
           <ItemList loading={loading} productos={productos}/> 
        </div>
    )

}

