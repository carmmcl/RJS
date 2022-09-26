import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import {addDoc, collection} from 'firebase/firestore'
import { db } from "../../firebase/firebaseConfig"



export const Checkout =()=>{

    const {cart, cartTotal, terminarCompra}= useContext (CartContext)

    const [values, setValues] = useState ({
        nombre:'',
        apellido:'',
        email:'',
        direccion:'',
    })
 
    const handleInputForm = (e)=>{
        setValues ({
            ...values,
            [e.target.name]:e.target.value

        })
    }

    const handleSubmit =(e) =>{
            e.preventDefault ()
            console.log ("submit del form")
    

    const orden ={
        comprador:
            values,
            items:cart,
            total:cartTotal()     
    }

   
    
    if (values.nombre.length <= 2){
        alert ("Nombre incorrecto")
        return
    }
    if (values.apellido.length <= 2){
        alert ("Apellido incorrecto")
        return
    }
    if (values.email.length <= 2){
        alert ("Email incorrecto")
        return
    }

    const ordenesRef = collection (db, 'ordenes')

    addDoc (ordenesRef, orden)
        .then((doc) =>{
            console.log (doc.id)
            terminarCompra (doc.id)
        })


    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return(
            <div>

            <h2>Checkout</h2>
            <hr></hr>

            <form onSubmit={handleSubmit}>
                <input 
                name="nombre"
                value={values.nombre}
                onChange={handleInputForm}
                type ={'text'} className="my-3 form-control" placeholder="Nombre"/>

<input 
                name="apellido"
                value={values.apellido}
                onChange={handleInputForm}
                type ={'text'} className="my-3 form-control" placeholder="Apellido"/>

                <input 
                name="email"
                value={values.email}
                onChange={handleInputForm}
                type ={'email'} className="my-3 form-control" placeholder="email"/>

                <input 
                name="direccion"
                value={values.direccion}
                onChange={handleInputForm}
                type ={'text'} className="my-3 form-control" placeholder="direccion"/>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>

            </div>

    )
}