

import { Spinner } from 'reactstrap'
import { Item } from '../Item/Item'



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

            {productos.map ( (product) => <Item producto={product} key= {product.id}/>) }            
                
        </div>
}
        </>
    )
        }


export default ItemList
