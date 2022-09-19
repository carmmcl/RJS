import ItemCard from "../ItemCard/ItemCard";
import { ItemCount } from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail =({item}) =>{

    const {cart, addToCart, isInCart} = useContext (CartContext)
    console.log(cart)

    const [cantidad, setCantidad] = useState (1)

    const handleAgregar=()=>{
        const itemToCart ={
            id:item.id,
            name:item.name,
            price:item.price,
            cantidad
        }
        
        
        addToCart(itemToCart)
        
    }

    return(

    <>
    <div className="row d-flex justify-content-center">
    <ItemCard  name={item.name} description ={item.description} img={item.img} category={item.category}price={item.price} stock={item.stock}/>
    </div>
    
    {/*{isInCart(item.id) &&<p> Item Agregado</p>*/}

    {
        isInCart(item.id)
        ?
        <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
        :
        <ItemCount
        max={item.stock}
        counter={cantidad}
        setCounter={setCantidad}
        handleAgregar={handleAgregar}
        /> 

    }

{  <Link to="/" className="botones">Volver</Link>}
   {/*} <ItemCount
        max={item.stock}
        counter={cantidad}
        setCounter={setCantidad}
        handleAgregar={handleAgregar}
    />  
<Link to="cart/" className="btn btn-success my-2">Terminar mi compra</Link>*/}

</>

)

}
export default ItemDetail;