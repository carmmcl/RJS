import ItemCard from "../ItemCard/ItemCard"

export const Item =({producto}) =>{

    return (
        
            <div className="col-auto">
                    <ItemCard  name={producto.name} description ={producto.description} img={producto.img} price={producto.price} stock={producto.stock}/>
                    

        </div>
    )
}