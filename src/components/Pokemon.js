import styles from './Pokemon.module.scss'
import { getMorePokemonInformation } from '../api/api'
import { useState } from 'react'

function Pokemon({pokemon, idx}) {
    const [additional, setAdditional] = useState()
    const [showAdditional, setShowAdditional] = useState(false)

    const showMoreInformation = async () => {
        if (showAdditional) {
            setShowAdditional(false)
        } else {
            if (!additional) {
                try {
                    const info = await getMorePokemonInformation(pokemon.url)
                    setAdditional(info)
                } catch (e) {
                    console.log(e)
                }
            }  
            setShowAdditional(true)
        } 
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className={styles.box}>
            <div className={styles.mainInfo}>
                <span className={styles.indexNumber}>{idx + 1}</span>
                <div className={styles.name}>
                    {capitalizeFirstLetter(pokemon.name)}
                </div>
                <button type='button' onClick={() => showMoreInformation()}>{showAdditional ? 'Hide' : 'Show'}</button>
            </div>
            {additional && showAdditional && 
                <div className={styles.additionalInfo}>
                    <div className={styles.additionalInfoItems}>
                        <div>Base experience: {additional.base_experience}</div>
                        <div>Height: {additional.height}</div>
                        <div>Weight: {additional.weight}</div>
                    </div>
                    <img src={additional.sprites.front_default}/>
                </div>
            }
        </div>
    )
}

export default Pokemon