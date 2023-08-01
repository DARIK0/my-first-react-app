import axios from "axios"

const baseUrl = 'https://pokeapi.co/api/v2/'
export const getPokemons = () => {
    return axios.get(`${baseUrl}pokemon?limit=10&offset=0`).then(resp => resp.data)
}