import styles from '../css/stars.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext'
import { motion } from 'framer-motion'

const Stars = () => {
    const { antitheme } = useContext(ThemeContext);

    const s = []

    for(let i = 0; i<70; i++){
        s.push([`${Math.floor(Math.random()*50) +1}%`, `${Math.floor(Math.random()*100) +1}%`, `${Math.floor(Math.random()*12)+1}s`, String(i)])
    }

    return (
        s.map((star) => (
        <motion.div key={star[3]} className={styles.star} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {type: 'spring', duration: 1, delay: 1}}}
        style={{
           top: star[0],
           left: star[1],
           animationDuration: star[2],
           backgroundColor: antitheme  
        }}>
        </motion.div>
        )
        )
    )
}

export default Stars