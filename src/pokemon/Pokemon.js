import { useState, useEffect } from "react";
import "./Pokemon.css";
import {Link} from 'react-router-dom';

function Pokemon({ pokeUrl }) {


    const [pokemonData, setPokemonData] = useState({});
    const [cargado, setCargado] = useState(false);
    
    useEffect(() => { getPokemonData() }, []);

    function getPokemonData(){
        fetch(pokeUrl)
        .then((response) => response.json())  
        .then((apiData) => {
            console.log(apiData);
            setPokemonData(apiData);
            setCargado(true);
        });
    }

    if(cargado){
        return(
            <div className="card col-lg-3 mt-3 mx-5 shadow p-3 mb-5 bg-body-tertiary rounded">
                <img src={pokemonData.sprites.front_default} className="card-img-top" alt={pokemonData.name}/>
                <div className="card-body">
                    <h5 className="card-title fs-2">{pokemonData.name.toUpperCase()}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{pokemonData.types[0].type.name.toUpperCase()}</h6>
                    <Link className="btn btn-danger mt-4" to={`/detalle/${pokemonData.name}`}>Saber más</Link>
                </div>
            </div>
          );  
    }
    
}

export default Pokemon;