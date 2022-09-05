import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../helpers/getData";
import { Spinner } from 'reactstrap'
import ItemDetail from "../ItemDetail/ItemDetail";
 

const ItemDetailContainer =() =>{

    const [item, setItem] = useState (null)
    const [loading, setLoading] =useState (true)
    const {itemId} = useParams()
    console.log(itemId)
    console.log(item)


    useEffect(()=>{
        setLoading(true)

        getData()
        .then((res)=>{
            setItem(res.find((prod)=> prod.id === Number(itemId)))
        })
        .catch(error =>console.log(error))
        .finally (()=>{ 
            setLoading (false)
        })
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