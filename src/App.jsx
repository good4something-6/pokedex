import "./App.css";
import { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import { Link, Route, useLocation } from "react-router-dom";

function App() {
  const P = new Pokedex({ timeout: 1800 * 1000 });
  const [pokemon, setPokemon] = useState([]);

  const makeAPIcall = async () => {
    for (let i = 1; i < 152; i++) {
      const response = await P.getPokemonByName(i);
      setPokemon((pokemon) => [...pokemon, response]);
    }
  };

  useEffect(() => {
    makeAPIcall();
  }, []);

  useEffect(() => {
    if (pokemon.length === 151) {
      console.log(pokemon);
    }
  }, [pokemon]);

  // return (
  //   <div className="App">
  //     {pokemon.map((pokemonEle) => {
  //       return (
  //         <div className="container">
  //           <h1>{pokemonEle.name}</h1>
  //           <img
  //             src={pokemonEle.sprites.front_default}
  //             alt={pokemonEle.name}
  //           ></img>
  //           <div>
  //             <h3>Types</h3>
  //             {pokemonEle.types.map((ele) => {
  //               return <h3>{ele.type.name}</h3>;
  //             })}
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <div className="App">
        {pokemon.map((pokemonEle) => {
          return (
            <Link to={`/${pokemonEle.name}`}>
              <div className="container">
                <h1>{pokemonEle.name}</h1>
                <img
                  src={pokemonEle.sprites.front_default}
                  alt={pokemonEle.name}
                ></img>
                <div>
                  <h3>Types</h3>
                  {pokemonEle.types.map((ele) => {
                    return <h3>{ele.type.name}</h3>;
                  })}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="title">{location.pathname.slice(1)}</h1>
      </div>
    );
  }
}

export default App;
