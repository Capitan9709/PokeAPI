function LandingPage(){
    return (
        <div className="col-12 text-bg-dark pb-2">
            <h1>Los Pokemons</h1>
            <div className="d-flex justify-content-center mt-3">
                <div className="col-10">
                    <ul className="list-group text-start">
                        <li className="list-group-item bg-secondary border-dark mb-3 rounded d-flex">
                            <div className="col-9">
                                <h3>¿Qué son los Pokémon?</h3>
                                <h4>Los Pokémon son criaturas ficticias que se han vuelto extremadamente populares en todo el mundo desde su creación en 1995. Los Pokémon se han expandido a través de videojuegos, series animadas, películas, tarjetas coleccionables y otros medios.</h4>
                            </div>
                            <div className="col-3">
                                <img src="https://2.bp.blogspot.com/-Av8Mtm8z014/UuAC5VbRMsI/AAAAAAAABAk/0ioXHDS_18Y/s1600/Bulbasaur.png" alt="bulbasaur" className="w-50"/>
                            </div>
                        </li>
                        <li className="list-group-item bg-secondary border-dark mb-3 rounded">
                            <h3>¿Cómo se juega con los Pokémon?</h3>
                            <h4>Los videojuegos de Pokémon son uno de los medios más populares de jugar con estos personajes. En los juegos de Pokémon, los jugadores controlan a un entrenador Pokémon que viaja a través de un mundo virtual y captura, entrena y pelea con los Pokémon de otros entrenadores. El objetivo final del juego es convertirse en el campeón de la Liga Pokémon.</h4>
                        </li>
                        <li className="list-group-item bg-secondary border-dark mb-3 rounded d-flex">
                            <div className="col-2">
                                <img src="https://pngimg.com/uploads/pokemon/pokemon_PNG132.png" alt="eve" className="w-50"/>
                            </div>
                            <div className="col-10">
                                <h3>¿Cuántos Pokémon existen?</h3>
                                <h4>Actualmente hay más de 800 especies de Pokémon en el universo Pokémon. Cada uno tiene sus propias habilidades y estadísticas únicas.</h4>
                            </div>
                        </li>
                        <li className="list-group-item bg-secondary border-dark mb-3 rounded">
                            <h3>¿Qué son las tarjetas coleccionables de Pokémon?</h3>
                            <h4>Las tarjetas coleccionables de Pokémon son cartas con imágenes de Pokémon que se utilizan para coleccionar y jugar. Cada tarjeta tiene una imagen de un Pokémon y sus estadísticas, como su nivel de salud, ataques y debilidades.</h4>
                        </li>
                        <li className="list-group-item bg-secondary border-dark mb-3 rounded d-flex">
                            <div className="col-9">
                                <h3>¿Qué es el anime Pokémon?</h3>
                                <h4>El anime de Pokémon es una serie de televisión animada que sigue las aventuras del personaje principal, Ash Ketchum, y su Pikachu mientras viajan por el mundo de los Pokémon. El anime ha sido transmitido en todo el mundo y cuenta con muchos fanáticos.</h4>
                            </div>
                            <div className="col-3">
                                <img src="http://www.clipartbest.com/cliparts/Kin/Lq9/KinLq9ApT.png" alt="bulbasaur" className="w-50"/>
                            </div>
                        </li>
                        <li className="list-group-item bg-secondary border-dark mb-3 rounded">
                            <h3>¿Cuál es la mejor manera de empezar a aprender sobre Pokémon?</h3>
                            <h4>Si eres nuevo en el mundo de Pokémon, una buena manera de empezar a aprender es a través de los juegos de Pokémon para consolas portátiles o móviles. Estos juegos te enseñarán las mecánicas básicas de cómo capturar y entrenar Pokémon, y también te permitirán explorar el mundo de Pokémon por ti mismo.</h4>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default LandingPage;