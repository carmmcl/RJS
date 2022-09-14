import {BsCart3} from "react-icons/bs";
import './CartWidget.css';
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const CartWidget = ()=> {
    
    const {cartQuantity} = useContext(CartContext)
    return (
        <Link to ="/cart">
            <BsCart3 className='bscart'/>  
            <span>{cartQuantity()}</span>
        </Link>
    )

}