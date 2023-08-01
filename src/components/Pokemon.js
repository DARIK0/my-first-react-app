import styles from './Pokemon.module.scss'

function Pokemon({pokemona}) {

    return (
        <div className={styles.box}>
            <div className={styles.name}>{pokemona.name}</div>
            <div>{pokemona.url}</div>
        </div>
    )
}

export default Pokemon