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

  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <div className="App">
        {pokemon.map((pokemon) => {
          return (
            <Link className="link" to={`/${pokemon.name}`}>
              <div className="container">
                <h1 className="link">{pokemon.name}</h1>
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
