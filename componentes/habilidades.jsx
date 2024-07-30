import styles from '../css/habilidades.module.css'
import { motion } from 'framer-motion'
import { useRef, useEffect, useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext'
import TechIcons from './techicons'

const Habilidades = ({page, setPage}) => {
    const habilidadesRef = useRef(null)
    const {theme, antitheme} = useContext(ThemeContext)

    useEffect(()=>{
        if(page=='habilidades'&&habilidadesRef) habilidadesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setPage(null)
    }, [page])

    const linguagens = [
        {
            nome: 'C',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg'
        },
        {
            nome: 'Javascript',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
        },
        {
            nome: 'Python',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
        },
        {
            nome: 'Racket',
            url: '/GuilDev/racket.png'
        }
    ]

    const lf = [
        {
            nome: 'React',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
        },
        {
            nome: 'Framer Motion',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg'
        },
        {
            nome: 'Express',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
        },
        {
            nome: 'Axios',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg'
        },
        {
            nome: 'Flask',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg'
        },
        {
            nome: 'Pandas',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg'
        },
        {
            nome: 'MatPlotLib',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg'
        }
    ]

    const ferramentas = [
        {
            nome: 'HTML',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
        },
        {
            nome: 'CSS',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
        },
        {
            nome: 'Git',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
        },
        {
            nome: 'VS Code',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'
        },
        {
            nome: 'Vite',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg'
        },
        {
            nome: 'Node Js',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
        },
        {
            nome: 'Arduino IDE',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg'
        },
        {
            nome: 'Firebase',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg'
        },
        {
            nome: 'MySQL',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
        },
        {
            nome: 'Postman',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg'
        }
    ]

    const variantes = (lado) => {
        return {
            'hide': {
                x: lado=='esquerdo'? -600: 600,
                rotate: lado=='esquerdo'? 10: -10
            },
            'show': {
                x: 0,
                rotate: 0,
                transition: {
                    type: 'spring',
                    duration: 1.5,
                }
            }
        }
    }

    return(
        <motion.div ref={habilidadesRef} style={{backgroundColor: theme, color: antitheme}} className={styles.habilidades} initial='hide' whileInView='show' >
            <motion.div className={styles.linguagens} style={{borderColor: antitheme}} variants={variantes('esquerdo')} >
                <motion.h1>Linguagens</motion.h1>
                <TechIcons techs={linguagens} />
            </motion.div>
            <motion.div className={styles.lf} style={{borderColor: antitheme}} variants={variantes('direito')} >
                <motion.h1>Frameworks/Bibliotecas</motion.h1>
                <TechIcons techs={lf} scroll={true}/>
            </motion.div>
            <motion.div className={styles.ferramentas} style={{borderColor: antitheme}} variants={variantes('esquerdo')} >
                <motion.h1>Ferramentas</motion.h1>
                <TechIcons techs={ferramentas} />
            </motion.div>
        </motion.div>
    )
}

export default Habilidades