import styles from '../css/sobre.module.css'
import { motion } from 'framer-motion'
import { useRef, useEffect, useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext'

import Stars from './stars'

const Sobre = ({page, setPage}) => {
    const {theme, antitheme} = useContext(ThemeContext);
    const sobreRef = useRef(null)

    useEffect(() => {
        if(page=='sobre'&&sobreRef) sobreRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setPage(null)
    }, [page])


    return (
        <motion.div className={styles.sobre} style={{backgroundImage: `linear-gradient(black, ${theme} 5%)`}} initial='hide' whileInView='show' ref={sobreRef}>
            <motion.div className={styles.text} style={{color: antitheme}} variants={{'hide': {x: -900, rotate: -20}, 'show': {x:0, rotate: 0, transition: {type: 'spring', duration: 2, delay: .5}}}}>
                <motion.h1 style={{borderRightColor: antitheme}} initial={{width: 0}} whileInView={{width: 'max-content', transition: {type: 'keyframes', duration: 1.5, delay: .5}}}>
                    Programador <a>Frontend</a>
                </motion.h1>
                <motion.p variants={{'hide': {x: 1000}, 'show': {x:0, transition: {type: 'spring', duration: 1.5, delay: 1.5}}}}>
                    Atualmente, sou Graduando em engenharia de computação na UFU e programador frontend
                    no tempo livre. Além disso, também possuo formação técnica em eletrônica no Cefet-MG, onde 
                    atuei com projetos de robótica e IoT, e sou proeficiente em inglês com nível C1. 
                </motion.p>
                <motion.p variants={{'hide': {x: 1000}, 'show': {x:0, transition: {type: 'spring', duration: 1.5, delay: 1.5}}}}>
                    Como experiência, fiz um estágio de 5 meses em uma Organização Não Governamental (ONG), na 
                    qual era responsável por ensinar as crianças da organização os fundamentos da programação 
                    em blocos e, também, por criar jogos educacionais. Para isso, utilizei da plataforma Scratch.
                    No mesmo estágio, também fui um dos responsáveis por criar um site online para hospedar os jogos 
                    que eu e os outros estagiários criamos. 
                </motion.p>
                <motion.p variants={{'hide': {x: 1000}, 'show': {x:0, transition: {type: 'spring', duration: 1.5, delay: 1.5}}}}>
                    No momento, estou em busca de um estágio em desenvolvimento web e, também, de me aperfeiçoar nas
                    ferramentas mais utilizadas no mercado. 
                </motion.p>
                <motion.div className={styles.social} style={{boxShadow: `0px -2px 3px ${antitheme}`}} variants={{'hide': {rotateX: 90}, 'show': {rotateX: 0, transition: {type: 'spring', duration: 1.5, delay: 1.5}}}}>
                    <motion.a title='Linkedin' className={styles.socialcard} style={{boxShadow: `1px 1px 3px ${antitheme}, -1px -1px 3px ${antitheme}`, backgroundColor: theme}} href='https://www.linkedin.com/in/guilherme-gomes-0b4522243/'
                    variants={{'hide': {x: -500}, 'show': {x: 0, transition: {type: 'spring', duration: 1.5, delay: 3}}}}>Linkedin</motion.a>
                    <motion.a title='GitHub' className={styles.socialcard} style={{boxShadow: `1px 1px 3px ${antitheme}, -1px -1px 3px ${antitheme}`, backgroundColor: theme}} href='https://github.com/Guirou0'
                    variants={{'hide': {x: 500}, 'show': {x: 0, transition: {type: 'spring', duration: 1.5, delay: 3}}}}>GitHub</motion.a>
                </motion.div>
            </motion.div>
            <motion.div className={styles.photo} variants={{'hide': {x: 900, rotate: 20}, 'show': {x:0, rotate: 0, transition: {type: 'spring', duration: 2, delay: .5}}}}>
               <Stars />
            </motion.div>
        </motion.div>
    )
}

export default Sobre