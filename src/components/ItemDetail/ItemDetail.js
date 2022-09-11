import ItemCard from "../ItemCard/ItemCard";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";


const ItemDetail =({item}) =>{

    const [cantidad, setCantidad] = useState (1)

    const handleAgregar=()=>{
        console.log(
            ...item,
            cantidad,
        )
    }

return(

    
    <div className="row d-flex justify-content-center">
    <ItemCard  name={item.name} description ={item.description} img={item.img} category={item.category}price={item.price} stock={item.stock}/>
    
    <ItemCount
        max={item.stock}
        counter={cantidad}
    />  

</div>

)

}
export default ItemDetail;