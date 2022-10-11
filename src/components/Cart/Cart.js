import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Button } from "reactstrap"
import {BsFillTrashFill} from "react-icons/bs";
import {Link} from 'react-router-dom'
import './Cart.css'


export const Cart =()=>{

    const { cart, cartTotal, emptyCart, removeItem} = useContext (CartContext)

    if (cart.length === 0){

        return (
            <div className="container-my 5">
                <h2 className="titleCart">No hay productos en tu carrito</h2>
                <hr/>
                <Link to="/" className="linkComprar">Ir a comprar</Link>
            </div>
        )
    }

    return(

        <div>
            <h2 className="titleCart">Mi Carrito</h2>

            { cart.map ((item)=>(
                    <div  className="productInCart" key={item.id}>
                    <h3 className="titleProductCart">{item.name}</h3>   
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio por unidad:$ {item.price}</p>                    
                    <button onClick={()=>removeItem(item.id)}><BsFillTrashFill/></button>
                    <hr/>
                    </div>
            ))

            }
            
            <h5 className="precioFinal">Total: $ {cartTotal()} </h5> 
            <div buttonsCart>
            <Link to="/" className="btn btn-success mx-3 buttonContinue">Seguir Comprando</Link>                       
            <Link className= "btn btn-success buttonEnd" to='/checkout'>Terminar mi compra</Link>
            <h3></h3>
            <Button className="mx-3 buttonCart" onClick={emptyCart} >Vaciar carrito</Button>
            </div>
        </div>


    )
}