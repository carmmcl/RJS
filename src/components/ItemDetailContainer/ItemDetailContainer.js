import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from 'reactstrap'
import ItemDetail from "../ItemDetail/ItemDetail";
import {doc, getDoc} from 'firebase/firestore'
import { db } from "../../firebase/firebaseConfig";

const ItemDetailContainer =() =>{

    const [item, setItem] = useState (null)
    const [loading, setLoading] =useState (true)
    const {itemId} = useParams()
    console.log(itemId)
    console.log(item)


    useEffect(()=>{
        setLoading(true)
        
        const docRef = doc(db, 'productos', itemId)

        getDoc (docRef)
            .then ((doc) =>{
              setItem ({id:doc.id, ...doc.data ()})          
            })
            .finally (()=>
            setLoading (false))
        
    },[])

    return (

       <div>    
        {
            loading?
            
            <Spinner
                className="m-5"
                color="primary"
            >
                Loading...
            </Spinner>
            :
                
                 <ItemDetail item={item}/>
    
        }
       </div>

    )

}

export default ItemDetailContainer;