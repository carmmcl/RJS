import ItemCard from "../ItemCard/ItemCard"
import { Link } from "react-router-dom"
import './Item.css'


export const Item =({producto}) =>{

    return (
        
            <div className="col-auto">
                    <ItemCard  name={producto.name} description ={producto.description} img={producto.img} className="btn btn-secondary my-2 botones"  price={producto.price} stock={producto.stock}/>
                   <Link to= {`/item/${producto.id}`} className="btn btn-secondary my-2 botones" >Ver más</Link>
                    

        </div>
    )
}