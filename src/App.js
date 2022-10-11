
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ItemListContainer } from './components/ItemlistContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/Context/CartContext';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';



function App() {

  return (
    
      <CartProvider>
      <BrowserRouter>

        <NavBar/>

        <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
         <Route path='*' element={<Navigate to ='/'/>}/>
        </Routes>
               
             
          
        {/*<Footer/>*/}
      </BrowserRouter>
      </CartProvider>
    
  );
}

export default App;

