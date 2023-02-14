import './Cabecera.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

function Cabecera(){
    return (
        <header className="pt-5 bg-dark">
            <div  className="d-flex justify-content-evenly align-items-center mb-5 pb-5">
                <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeAPI" />
            </div>
            <div className='d-flex justify-content-center py-3' id='navbarNav'>
                <ul className='nav nav-pills'>
                    <li className='nav-item mx-2'><Link type="button" className="btn btn-warning" to='/'>Inicio</Link></li>
                    <li className='nav-item mx-2'><Link type="button" className="btn btn-warning" to='/Pokemons'>Pokemons</Link></li>
                    <li className='nav-item mx-2'><Link type="button" className="btn btn-warning" to='/Jugar'>Jugar</Link></li>
                    <li className='nav-item mx-2'><Link type="button" className="btn btn-warning" to='/lista'>lista</Link></li>                
                </ul>
            </div>
        </header>
    );
}

export default Cabecera;