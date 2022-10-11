import { ItemCount } from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import './ItemDetail.css';
import { BiArrowBack } from "react-icons/bi";



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

        <div>

        {<BiArrowBack className="arrowcolor"/>  }
       
         {<Link to="/" className="linkVolver">Volver</Link>}
     
         <div className= "pics container">
     
         <div>
            <img className="col-xs-6 col-md-6 col-lg-10 color p-3 pt-3" src={item.img}/>
            </div>
            <div> 
            <h3 className="title">{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.descriptionMore}</p>
            <p>Precio por unidad: $ {item.price}</p>
            </div>       
    

    {
        isInCart(item.id)
        ?
        <Link to="/cart" className="btn links">Terminar mi compra</Link>
        :
        <ItemCount
        max={item.stock}
        counter={cantidad}
        setCounter={setCantidad}
        handleAgregar={handleAgregar}
        /> 

    }


</div>
   
</div>

)

}

export default ItemDetail;