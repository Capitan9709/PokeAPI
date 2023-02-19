import {useState, useEffect} from 'react';

function Juego(){

    const [pokemonSeleccionado, setPokemonSeleccionado] = useState({});
    const [pokemonInput, setPokemonInput] = useState();
    const [puntuacion, setPuntuacion] = useState(0);

    useEffect(() => { cargarPokemons() }, []);
    

    function cargarPokemons(){

        fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 1000))
        .then(response => response.json())
        .then(data => {
            setPokemonSeleccionado(data)
        });
    }

    function comprobar(){
        if(pokemonInput.toUpperCase() == pokemonSeleccionado.name.toUpperCase()){
            alert("Correcto se te suma 1 punto");
            cargarPokemons();
            setPokemonInput("");
            setPuntuacion(puntuacion + 1);
        }else{
            alert("Incorrecto se te resta 1 punto");
            setPuntuacion(puntuacion - 1);
        }
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
            <div className='col-12 d-flex justify-content-center'>
                <div className='col-4 d-flex flex-column justify-content-center'>
                    <img src={pokemonSeleccionado.sprites.front_default} className="w-50" alt={pokemonSeleccionado.name}/>
                    <div className='col-6'>
                        <input className='form-control bg-warning rounded my-2' type="text" value={pokemonInput}
                            onChange={e => setPokemonInput(e.target.value)} />
                        <button className='btn btn-warning' onClick={comprobar}>Adivinar</button>
                    </div>
                </div>
                <div className='col-2'>
                    <h2>Puntuacion:</h2>
                    <h3>{puntuacion}</h3>
                </div>
            </div>  
        </div>
    )
}

export default Juego;