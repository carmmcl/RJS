import { useEffect, useState } from "react"
import ItemCard from "./ItemCard"
import { Spinner } from 'reactstrap'
import { products } from "../../data/data"



const getData =()=> {
   
    const error=false;
    return new Promise ((resolve, reject) =>{
      
        setTimeout(()=>{
            if(!error) {
                resolve (products)
            }else{
                reject("Error")
            }
        },2000)
    } )
}



const ItemList =()=>{
   
        const [data, setData] = useState ([])
    console.log(data)
   const [loading, setLoading] = useState (true)
   
       
   useEffect(()=>{
   
       getData ()
       .then(res => {
        setData(res);
        setLoading(false);
       })
       .catch(error=>console.log(error))
   },[])   
   
    return (
        <>
        {
            loading?
            
                    <Spinner
                        className="m-5"
                        color="primary"
                    >
                        Loading...
                    </Spinner>
                    :
        
        <div className="row d-flex justify-content-center">
            {
                products.map (product => (
                    <div className="col-auto">
                    <ItemCard key= {product.id} name={product.name} description ={product.description} img={product.img} price={product.price} stock={product.stock}/>
                    </div>

                 ))

            }
                
        </div>
}
        </>
    )
        }


export default ItemList
