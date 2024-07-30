import styles from '../css/navbar.module.css'
import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../contexts/themeContext'
import Popup from 'reactjs-popup'

import Icon from './icon.jsx'

const Navbar = ({setPage}) => {
    const {theme, antitheme, toggleTheme} = useContext(ThemeContext)

    /* const [check, setCheck] = useState(false)

    useEffect(()=> {
        if (theme=='var(--color-white)'){
            setCheck(true)
        }
    }, [theme]) */

    const Tooltip = ({content, text}) => {
        return (
            <Popup
                trigger={content}
                position="bottom center"
                on={'hover'}
                {...{arrowStyle: {color: antitheme, animation: 'appear .2s ease-out'}}}>
                <span style={{backgroundColor: antitheme, color: theme}} className={styles.popup}>{text}</span>
            </Popup>
        )
    }

    const scrollTo = (elemento) => {
        setPage(elemento)
    }

    return(
        <div className={styles.navbar} style={{backgroundColor: theme, color: antitheme}}>
            <Icon setPage={setPage}/>
            <div className={styles.navigation} style={{backgroundColor: theme, color: antitheme}}>
                <Tooltip content={<nav onClick={(e) => scrollTo('sobre')} className={styles.sobre}>Sobre</nav>} text={'Conheça mais sobre mim'} />
                <Tooltip content={<nav onClick={(e) => scrollTo("habilidades")} className={styles.habilidades}>Habilidades</nav>} text={'Saiba quais tecnologias eu tenho familiaridade'}/>
                <Tooltip content={<nav onClick={(e) => scrollTo("projetos")} className={styles.projetos}>Projetos</nav>} text={'Visite alguns dos meus projetos pessoais'} />
            </div>
            <label className={styles.themebox} style={{backgroundColor: theme}}>
                <input type='checkbox' autoComplete='off' onChange={()=>{
                    toggleTheme()
                    scrollTo('landing')}} />   
                <span className={styles.themeround}></span>
                <div className={styles.lighticon}></div>
                <div className={styles.darkicon}></div>
            </label>
        </div>
    )
}

export default Navbar