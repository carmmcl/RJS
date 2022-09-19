import {BsCart3} from "react-icons/bs";
import './CartWidget.css';
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const CartWidget = ()=> {
    
    const {cartQuantity, cart} = useContext(CartContext)

    return (
        <Link to ="/cart" className={`widget ${cart.length > 0 ? 'widget-visible': ''}`}>
            <BsCart3 className='bscart'/>  
            <span>{cartQuantity()}</span>
        </Link>
    )

}