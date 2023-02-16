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
                        <hr/>
                        <h2>Nº en la Pokedex: {pokemonData.id}</h2>
                        <h3>Nombre: <b className="text-warning">{pokemonData.name.toUpperCase()}</b></h3>
                        <h3>Altura: <b className="text-warning">{pokemonData.height * 10}</b> Centimetros | <b className="text-warning">{pokemonData.height / 10}</b> Metros</h3>
                        <h3>Peso: <b className="text-warning">{pokemonData.weight / 10}</b> Kilogramos</h3>
                        <h3>Experiencia Base: <b className="text-warning">{pokemonData.base_experience}</b></h3>
                        <h3>Tipos: </h3>
                        <ul>
                            {pokemonData.types.map((tipo) => <li><b className="text-warning">{tipo.type.name.toUpperCase()}</b></li>)}
                        </ul>
                        <hr/>
                        <table className="table text-warning">
                            <thead>
                                <tr>
                                    <th>Estadistica</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                {pokemonData.stats.map((est) =>
                                <tr>
                                    <th>{est.stat.name.toUpperCase()}</th>
                                    <td>{est.base_stat}</td>
                                </tr>
                                )}    
                            </tbody>
                        </table>
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
