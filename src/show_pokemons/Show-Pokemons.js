import Pokemon from '../pokemon/Pokemon';
import {useState, useEffect} from 'react';

function ShowPokemons() {

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
        <body className='bg-dark'>
            <div className="container bg-dark">
                <div className='row bg-dark'>
                {listaPokemons.map((pokemon) => 
                    <Pokemon key={pokemon.name} pokeUrl={pokemon.url}/>
                    
                )}
                </div>
            </div>
            <button className="btn btn-warning my-4" onClick={traerMas}>Cargar Mas</button>
        </body>
    )
}

export default ShowPokemons;