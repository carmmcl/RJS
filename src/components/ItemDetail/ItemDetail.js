import ItemCard from "../ItemCard/ItemCard";


const ItemDetail =({item}) =>{

return(

    
    <div className="col-auto">
    <ItemCard  name={item.name} description ={item.description} img={item.img} category={item.category}price={item.price} stock={item.stock}/>
    

</div>

)

}
export default ItemDetail;