import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Button } from "reactstrap"
import {BsFillTrashFill} from "react-icons/bs";
import {Link} from 'react-router-dom'


export const Cart =()=>{

    const { cart, cartTotal, emptyCart, removeItem} = useContext (CartContext)

    if (cart.length === 0){

        return (
            <div className="container-my 5">
                <h2>No hay productos en tu carrito</h2>
                <hr/>
                <Link to="/" className="botones">Ir a comprar</Link>
            </div>
        )
    }

    return(

        <div>
            <p>Mi Carrito</p>

            { cart.map ((item)=>(
                //<CartItem key={item.id} item={item}/>
                    <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Precio: {item.price}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <button onClick={()=>removeItem(item.id)}><BsFillTrashFill/></button>
                    <hr/>
                    </div>
            ))

            }
            <h5>Total: $ {cartTotal()} </h5>
            <Button onClick={emptyCart} >Vaciar carrito</Button>
        </div>


    )
}