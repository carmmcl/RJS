
import ItemList from './ItemList'
import './ItemListContainer.css'

export const ItemListContainer = (props)=> {
    
     return (
               
        <div>
            <h5 className="titulo">Best Cupcakes - {props.greeting}</h5>
           <ItemList/> 
        </div>
    )

}


