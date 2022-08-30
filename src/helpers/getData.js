import { products } from "../data/data";


export const getData =()=> {
   
    const error=false;
    return new Promise ((resolve, reject) =>{
      
        setTimeout(()=>{
            if(!error) {
                resolve (products)
            }else{
                reject("Error")
            }
        },2000)
    } )
}
