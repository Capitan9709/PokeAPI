import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./Pokemon.css";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

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
            <>
            <div className="card col-lg-3 mb-3 mt-3 mx-5 shadow p-3 mb-5 bg-body-tertiary rounded">
                <img src={pokemonData.sprites.front_default} className="card-img-top" alt={pokemonData.name}/>
                <div className="card-body">
                    <h5 className="card-title fs-2">{pokemonData.name.toUpperCase()}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{pokemonData.types[0].type.name.toUpperCase()}</h6>
                    {/* <button className="btn btn-danger mt-4" data-bs-toggle="modal" data-bs-target={`#${pokemonData.name}Detail`}>Saber más</button> */}
                    <Link className="btn btn-danger mt-4" to={`/detalle/${pokemonData.name}`}>Saber más</Link>
                </div>
            </div>

            <div className="modal fade" id={`${pokemonData.name}Detail`} tabIndex="-1" aria-labelledby={`${pokemonData.name}Detail`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title" id="pokemonDetailLabel">{pokemonData.name.toUpperCase()} - <span className="text-muted">N.º {pokemonData.id}</span></h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                <Carousel variant="dark">
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
                    
                    <div className="container mt-3">
                        <div className="row row-cols-2 d-flex justify-content-center align-items-center">
                            <div className="col"><p className="fs-4"><span>Height: </span>{pokemonData.height}m</p></div>
                            <div className="col"><p className="fs-4"><span>Weight: </span>{pokemonData.weight}kg</p></div>
                            <div className="col"><p className="fs-4"><span>Type: </span>{pokemonData.types[0].type.name}</p></div>
                            <div className="col"><p className="fs-4"><span>Main ability: </span>{pokemonData.abilities[0].ability.name}</p></div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
            </>
          );  
    }
    
}

export default Pokemon;