import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import {useParams} from "react-router-dom";

function DetallePokemon(){

    const {name} = useParams();

    const [pokemonData, setPokemonData] = useState({});
    const [cargado, setCargado] = useState(false);

    useEffect(() => { getPokemonData() }, []);

    function getPokemonData(){
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())  
        .then((apiData) => {
            setPokemonData(apiData);
            setCargado(true);
        });
    }

    if(cargado){
        return(
            <>
                <div className="text-bg-dark d-flex align-items-center">
                    <div className="text-start ms-5 col-5">
                        <h1>Caracteristicas: {name.toUpperCase()}</h1>
                        <h2>Nº en la Pokedex: {pokemonData.id}</h2>
                        <h3>Nombre: {pokemonData.name.toUpperCase()}</h3>
                        <h3>Altura: {pokemonData.height}</h3>
                        <h3>Peso: {pokemonData.weight}</h3>
                        <h3>Experiencia Base: {pokemonData.base_experience}</h3>
                    </div>
                    
                    <div className="text-center col-6">
                        <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={pokemonData.sprites.front_default}
                            alt={pokemonData.name}
                            />
                            <Carousel.Caption>
                                <h3>Default Front</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={pokemonData.sprites.back_default}
                            alt={pokemonData.name}
                            />
                            <Carousel.Caption>
                                <h3>Default Back</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={pokemonData.sprites.front_shiny}
                            alt={pokemonData.name}
                            />
                            <Carousel.Caption>
                                <h3>Shiny Front</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={pokemonData.sprites.back_shiny}
                            alt={pokemonData.name}
                            />
                            <Carousel.Caption>
                                <h3>Shiny Back</h3>
                            </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </>
        )
    }
    
}

export default DetallePokemon;
