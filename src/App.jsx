import "./App.css";
import { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import { Link, useLocation } from "react-router-dom";
import Tilt from "react-parallax-tilt";

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

  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <div className="App">
        {pokemon.map((pokemonEle) => {
          return (
            <Tilt>
              <Link to={`/${pokemonEle.name}`}>
                <div className="container link">
                  <h1 className="link">{pokemonEle.name}</h1>
                  <img
                    src={pokemonEle.sprites.front_default}
                    alt={pokemonEle.name}
                  ></img>
                  <div>
                    <h3 className="link">Types</h3>
                    {pokemonEle.types.map((ele) => {
                      return <h3 className="link">{ele.type.name}</h3>

                    })}
                    
                  </div>
                </div>
              </Link>
            </Tilt>
          );
        })}
      </div>
    );
  } else {
    const pokemonPicked = location.pathname.slice(1);
    const pokemonData = pokemon.filter((ele) => {
      return ele.name === pokemonPicked;
    })[0];
    console.log(pokemonData);
    return (
      <div>
        <h1 className="title">{pokemonData.name}</h1>
        <h2>height: {pokemonData.height}</h2>
        <h2>weight: {pokemonData.weight}</h2>
      </div>
    );
  }
}

export default App;
