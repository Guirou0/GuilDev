import styles from '../css/icon.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext'

const Icon = ({setPage}) => {
    const {theme, antitheme} = useContext(ThemeContext)



    return(
        <div className={styles.icon} style={{cursor: 'pointer'}} onClick={e => {setPage('landing')}}>
            <img alt='logo' src='/logo.png' className={styles.logo} />
            <h2>
                <p>Guilherme</p>
                <p>Dev</p>
            </h2>
        </div>
    )
}

export default Icon