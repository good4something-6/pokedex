import axios from 'axios';

const pokeApi = axios.create({

    baseURL: "https://pokeapi.co/api/v2/generation/1/"
});

export const getPokemon = ()=>{
    return pokeApi.get().then((data)=>{
        return data
    })
}
