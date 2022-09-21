import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getData } from '../../helpers/getData.js'
import { useParams } from 'react-router-dom'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../firebase/firebaseConfig'
    
export const ItemListContainer = (props)=> {
    
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    const { categoryId } = useParams ()
    
    
   useEffect(()=>{
   
    setLoading(true) 
    
    const productosRef = collection (db, 'productos')

    getDocs (productosRef)
        .then((resp)=>{
            const productosDB = resp.docs.map ((doc) => doc.data())
            console.log (productosDB)

            setProductos (productosDB)
        
        })
        .finally (()=>{
            setLoading (false)
        })
       
   },[categoryId])   
   
     return (
               
        <div>
            <h5 className="titulo"> Best Cupcakes - {props.greeting}</h5>
           <ItemList loading={loading} productos={productos}/> 
        </div>
    )

}

