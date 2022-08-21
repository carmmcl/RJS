import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/NavBar/NavBar.js';
import { ItemListContainer } from './components/ItemlistContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navegacion/>
     <ItemListContainer/>
    
    </div>
  );
}

export default App;
