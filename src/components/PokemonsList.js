import React, { useEffect, useState } from "react"
import {getPokemons} from '../api/api'
import Pokemon from './Pokemon'

export default function PokemonsList() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        retrievePokemonPortion()
    }, [])

    const retrievePokemonPortion = async () => {
        try {
            const poks = await getPokemons()
            console.log('poks:', poks)
            setPokemons(poks.results)
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <div>
            {pokemons.map((p) => <Pokemon pokemona={p} key={p.url} /> )}
            
        </div>
    )
}