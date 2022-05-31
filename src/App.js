import "./App.css";
import { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";

function App() {
  const P = new Pokedex({ timeout: 1800 * 1000 });
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    // P.getGenerationByName("generation-i")
    // .then((response) => {
    //   setPokemon(response.pokemon_species);
    // })
    // .catch((error) => {
    //   console.log('There was an ERROR: ', error);
    // });
    for (let i = 1; i < 152; i++)
      [
        P.getPokemonByName(i).then((response) => {
          console.log("response", response);
        }),
      ];
  }, []);

  console.log("set of pokemon", pokemon);

  return (
    <div className="App">
      {pokemon.map((pokemon) => {
        return <div>{pokemon.name}</div>;
      })}
    </div>
  );
}

export default App;
