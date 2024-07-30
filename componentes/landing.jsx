import styles from '../css/landing.module.css'
import { useRef, useEffect } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion';

const Landing = ({page, setPage}) => {
    const sobreRef = useRef(null)

    useEffect(()=>{
        if(page=='landing'&&sobreRef) sobreRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setPage(null)
    }, [page])

    const { scrollYProgress } = useScroll({
        target: sobreRef,
        offset: ['start start', 'end start']
    })

    const backgroundY = useTransform(scrollYProgress, [0,1], ['0%', '45%'])
    const textY = useTransform(scrollYProgress, [0,1], ['0%', '80%'])
    const bottomBright = useTransform(scrollYProgress, [0,0.6], ['brightness(1)', 'brightness(0.1)'])
    const enterpriseT = useTransform(scrollYProgress, [0, 0.4], ['translate(0vw, 0vh) scale(0.3)', 'translate(-150vw, 120vh) scale(2)'])

    return (
        <div className={styles.sobre} ref={sobreRef}>
            <motion.div className={styles.info} style={{y: textY, filter: bottomBright}} >
                <h1 className={styles.text}>Olá, eu sou o Guilherme</h1>
                <div className={styles.photo}></div>
            </motion.div>
            <motion.div className={styles.backParallax} style={{y: backgroundY}}></motion.div>
            <motion.div className={styles.bottomParallax} style={{filter: bottomBright}}></motion.div>
            <motion.div className={styles.enterprise} style={{transform: enterpriseT, filter: bottomBright}}></motion.div>
        </div>
    )
}

export default Landing