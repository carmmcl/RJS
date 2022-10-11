import { Spinner } from 'reactstrap'
import { Item } from '../Item/Item'
import './ItemList.css'



const ItemList =({productos, loading})=>{
   
    
     
    return (
        <>
        {
            loading?
            
            <Spinner
                className="m-5"
                color="primary"
            >
                Loading...
            </Spinner>
            :

        <div className="row d-flex justify-content-center">
            <h3 className="title">Nuestros Cupcakes</h3>
            {productos.map ( (product) => <Item producto={product} key= {product.id}/>) }            
                
        </div>
}
        </>
    )
        }


export default ItemList
