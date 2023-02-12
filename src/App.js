import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Pokemon from './pokemon/Pokemon';
import Cabecera from './cabecera/Cabecera';
import Pie from './pie/Pie';

function App() {

  const [listaPokemons, setListaPokemon] = useState([]);
  const [urlPokeApi, setUrlPokeApi] = useState('https://pokeapi.co/api/v2/pokemon?limit=8');

  // const datosPokemon = [];

  useEffect(() => cargaTodos(),[] );

  function cargaTodos(){

    fetch(urlPokeApi)
    .then(response => response.json())
    .then(data => {
      setListaPokemon(listaPokemons.concat(data.results))
      setUrlPokeApi(data.next)
      console.log("peticion")
      console.log(data)
    });
  }

  function traerMas(){
    cargaTodos();
  }

  function traerDatosUno(){

  }

  return (
    <div className="App">
      <Cabecera/>
      <div className="container">
        <div className='row'>
          {listaPokemons.map((pokemon) => 
            <Pokemon key={pokemon.name} pokeUrl={pokemon.url}/>
            
          )}
        </div>
      </div>
      <button className="btn btn-warning my-4" onClick={traerMas}>Cargar Mas</button>
      <Pie/>
    </div>
  );
}

export default App;
