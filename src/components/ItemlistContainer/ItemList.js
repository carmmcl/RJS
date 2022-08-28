import ItemCard from "./ItemCard"

const ItemList =()=>{

    

        const products = [
            {
                id:1,
                name: 'Cupcakes de vainilla',
                description:'Deliciosos cupcakes de vainilla, con relleno de frutas secas y cobertura de crema del cielo.' ,
                img: './assets/foto_cupcake_crema.jpg',
                price:50,
                stock: 12
        
            },
            {
                id:2,
                name: 'Cupcakes de chocolate',
                description: 'Deliciosos cupcakes de chocolate y nuez, relleno de dulce de leche y cobertura de crema  chantilly.',
                img: './assets/foto_cupcake_crema.jpg',
                price:50,
                stock: 12
            },
            {
                id:3,
                name: 'Cupcakes de cereza',
                description:'Deliciosos cupcakes de vainilla, con relleno de dulce de leche o crema y glaseado sabor cereza.' ,
                img: './assets/foto_cupcake_crema.jpg',
                price:50,
                stock: 5
        
            },
            {
                id:4,
                name: 'Producto 1',
                description:'Deliciosos cupcakes de chocolate, con relleno de crema chantilly y glaseado sabor cookies.' ,
                img: './assets/foto_cupcake_crema.jpg',
                price:50,
                stock: 12
        
            },
        ]
    
       
    return (
        <div className="row d-flex justify-content-center">
            {
                products.map (product => (
                    <div className="col-auto">
                    <ItemCard key= {product.id} name={product.name} description ={product.description} img={product.img} price={product.price} stock={product.stock}/>
                    </div>
                 ))

            }
                
        </div>
    )
    }


export default ItemList
