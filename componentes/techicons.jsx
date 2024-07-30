import styles from '../css/techicons.module.css'
import { motion } from 'framer-motion'
import { useContext, useRef } from 'react'
import { ThemeContext } from '../contexts/themeContext'

const DURATION = 1
const INITDELAY = 1.5

const TechIcons = ({techs}) => {
    const { theme, antitheme } = useContext(ThemeContext);
    const techRef = useRef(null)
   

    const variants = (size) => {
        
        let model = new Array(size).fill(null)

        return model.map((_, index) => {
            return {
                'hide': {
                    opacity: 1,
                    scale: 0
                },
                'show': {
                    opacity: 1,
                    scale: [0, 1.5, 1],
                    transition: {
                        type: 'spring',
                        duration: DURATION + INITDELAY,
                        delay: DURATION*index + INITDELAY
                    }
                }
            }
        })
    }

    const techVariants = variants(techs.length)

    const Icon = ({tech, variant}) => {

        return(
            <motion.div className={styles.icon} variants={variant} style={{borderColor: antitheme}} ref={techRef}>
                <img alt='logo' src={tech.url} />
                <h2 style={{color: antitheme}}>{tech.nome}</h2>
            </motion.div>
        )
    }

    return(
        <motion.div className={styles.techicons} >
            {techs.map((tech, index) => {
                return <Icon tech={tech} variant={techVariants[index]} key={index}/>
            })}
        </motion.div>
    )
}

export default TechIcons