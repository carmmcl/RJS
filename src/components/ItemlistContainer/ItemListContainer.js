
import ItemList from './ItemList'
import './ItemListContainer.css'

export const ItemListContainer = (props)=> {
    
    const pedirDatos =()=>{
        return new Promise ((resolve,reject)=>{

            setTimeout((res)=>{
                resolve (res)
            },3000)
        })
    }

    pedirDatos()
         .then((res)=>{
            
         })
         .catch((error)=>{

         })
    return (
               
        <div>
            <h5 className="titulo">Best Cupcakes - {props.greeting}</h5>
           <ItemList/> 
            
        </div>
    )

}



