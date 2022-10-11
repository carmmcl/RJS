import { createContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext ()

export const CartProvider =({children})=>{

    const [cart, setCart] = useState ([])

  const addToCart =(item) => {
    setCart ([...cart, item])
  }

const removeItem =(id)=>{
    setCart (cart.filter((item)=>item.id !==id))
}

  const isInCart =(id) =>{
    return cart.some ((item)=> item.id ===id)
  }

  const cartQuantity =()=>{

    return cart.reduce ((acc, item)=> acc + item.cantidad, 0)
  }

  const cartTotal =()=>{
    return cart.reduce((acc, item)=> acc + item.cantidad * item.price, 0)
  }

  const emptyCart =()=>{

    Swal.fire({
      title: 'Desea vaciar el carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, vaciar el carrito!'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]) 
      }
    })
    
  }

    const terminarCompra = (id) =>{

      Swal.fire({
        title: 'Compra registrada exitosamente',
        text: `Número de orden: ${id}`,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Excelente!'
      }) 
      setCart ([])

    }

    return (

        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem,
            terminarCompra
          }}>
            {children}
             </CartContext.Provider>
)

}