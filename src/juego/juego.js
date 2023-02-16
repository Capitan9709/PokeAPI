import {useState, useEffect} from 'react';

function Juego(){

    const [listaPokemons, setListaPokemon] = useState([]);
    const [cargado, setCargado] = useState(false);
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState({});
    
    useEffect(() => { cargarPokemons() }, []);
    

    function cargarPokemons(){

        fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 1000))
        .then(response => response.json())
        .then(data => {
            setPokemonSeleccionado(data)
            console.log("peticion")
            console.log(data)
            setListaPokemon(listaPokemons.concat(pokemonSeleccionado.name))
            console.log("lista pokemons")
            console.log(listaPokemons)
        });
    }

    // if(cargado){
    //     setListaPokemon(listaPokemons.concat(pokemonSeleccionado))
    //     setCargado(false)
    //     console.log("lista pokemons")
    //     console.log(listaPokemons)
    // }    


    function seleccionarPokemon(){
        const pokemon = listaPokemons[Math.floor(Math.random() * listaPokemons.length)];
        console.log(pokemon);
    }

    if(pokemonSeleccionado.sprites == null){
        return(
            <div className='text-bg-dark'>
                <i className="fa-solid fa-puzzle-piece fa-spin fa-3x text-warning"></i>
            </div>
        )
    }

    return(
        <div className='text-bg-dark'>
            <h1 className='p-2'>Adivina el Nombre</h1>
            <div className='d-flex justify-content-center'>
                <div className='col-6'>
                    <img src={pokemonSeleccionado.sprites.front_default} className="w-50" alt={pokemonSeleccionado.name}/>
                </div>
            </div>  
        </div>
    )
}

export default Juego;