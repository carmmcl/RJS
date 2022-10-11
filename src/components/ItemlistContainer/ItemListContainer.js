import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

import { useParams } from 'react-router-dom'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../../firebase/firebaseConfig'
    
export const ItemListContainer = (props)=> {
    
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    const { categoryId } = useParams ()
    
    
   useEffect(()=>{
   
    setLoading(true) 
    
    const productosRef = collection (db, 'productos')
    const q = categoryId
                ?
                query (productosRef, where ('category','==',  categoryId))
                :productosRef
    
    getDocs (q)
        .then((resp)=>{
            const productosDB = resp.docs.map ((doc) => ({id: doc.id, ...doc.data ()}))
            
            
            setProductos (productosDB)
        
        })
        .finally (()=>{
            setLoading (false)
        })
       
   },[categoryId])   
   
     return (
               
        <div>
            
           <ItemList loading={loading} productos={productos}/> 
        </div>
    )

}

