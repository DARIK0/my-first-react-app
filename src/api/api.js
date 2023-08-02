import axios from "axios"

const baseUrl = 'https://pokeapi.co/api/v2/'
export const getPokemons = (portion) => {
    return axios.get(`${baseUrl}pokemon?limit=${portion}&offset=0`).then(resp => resp.data)
}

export const getMorePokemonInformation = (url) => {
    return axios.get(url).then(resp => resp.data)
}