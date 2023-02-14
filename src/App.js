import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import ShowPokemons from './show_pokemons/Show-Pokemons';
import DetallePokemon from './detalle-pokemon/Detalle_Pokemon';
import LandingPage from './landing-page/Landing_Page';
import Cabecera from './cabecera/Cabecera';
import Pie from './pie/Pie';
import ListaDatos from './listaDatos/listaDatos';

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Cabecera/>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/pokemons" element={<ShowPokemons />}></Route>
          <Route path="/detalle/:name" element={<DetallePokemon />}></Route>
          <Route path="/lista" element={<ListaDatos />}></Route>
          <Route path="*" element={<h1>404 - Not Found</h1>}></Route>
        </Routes>
        <Pie/>
      </BrowserRouter>

    </div>
  );
}

export default App;
