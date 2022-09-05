
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Contacto } from './components/Contacto/Contacto';
import { Recetas } from './components/Recetas/Recetas';
import { ItemListContainer } from './components/ItemlistContainer/ItemListContainer';



function App() {

  return (
    
      <BrowserRouter>

        <NavBar/>

        <Routes>
        <Route path='/' element={<ItemListContainer greeting="Productos seleccionados"/>}/>
        {/*<Route path='/recetas' element={<Recetas/>}/>
        <Route path='/contacto' element={<Contacto/>}/>*/}
        <Route path='/productos/:categoryId' element={<ItemListContainer greeting="Productos seleccionados"/>}/>
        {/*<Route path='/item/:itemId' element={<ItemListContainer greeting="Productos seleccionados"/>}/>*/}
         <Route path='*' element={<Navigate to ='/'/>}/>
        </Routes>
         
         
             
          
        {/*<Footer/>*/}
      </BrowserRouter>
    
  );
}

export default App;

