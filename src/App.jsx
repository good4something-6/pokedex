import "./App.css";
import { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";

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

  return (
    <div className="App">
      {pokemon.map((pokemon) => {
        return (
          <div className="container">
            <h1>{pokemon.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
