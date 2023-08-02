import React, { useEffect, useState } from "react"
import {getPokemons} from '../api/api'
import Pokemon from './Pokemon'
import styles from './PokemonsList.module.scss'

export default function PokemonsList() {
    const [pokemons, setPokemons] = useState([])
    const [portion, setPortion] = useState(10)

    useEffect(() => {
        retrievePokemonPortion()
    }, [portion])

    const retrievePokemonPortion = async () => {
        try {
            const poks = await getPokemons(portion)
            setPokemons(poks.results)
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <>        
            <div>
                {pokemons.map((p, idx) => <Pokemon pokemon={p} idx={idx} key={p.url} /> )}
            </div>
            <div className={styles.moreInfo}>
                <button  type="button" onClick={() => setPortion(prev => prev + 10)}>Get more</button>
            </div>
        </>

    )
}