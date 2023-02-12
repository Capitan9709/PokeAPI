import './Cabecera.css';

function Cabecera(){
    return (
        <header className="pt-5">
            <div  className="d-flex justify-content-evenly align-items-center mb-5 pb-5">
                <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeAPI" />
            </div>
        </header>
    );
}

export default Cabecera;