import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.js';
import { ItemListContainer } from './components/ItemlistContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
     <ItemListContainer greeting="Productos seleccionados"/>
    
    </div>
  );
}

export default App;
