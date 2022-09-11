import ItemCard from "../ItemCard/ItemCard";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";


const ItemDetail =({item}) =>{

    const [cantidad, setCantidad] = useState (1)

    const handleAgregar=()=>{
        const itemToCart ={
            id:item.id,
            name:item.name,
            price:item.price,
            cantidad
        }
        
        console.log({
            itemToCart
    })
    }

    return(

    <>
    <div className="row d-flex justify-content-center">
    <ItemCard  name={item.name} description ={item.description} img={item.img} category={item.category}price={item.price} stock={item.stock}/>
    </div>
    <ItemCount
        max={item.stock}
        counter={cantidad}
        setCounter={setCantidad}
        handleAgregar={handleAgregar}
    />  

</>

)

}
export default ItemDetail;