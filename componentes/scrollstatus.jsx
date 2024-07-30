import { motion, useScroll, useTransform } from "framer-motion";

const ScrollStatus = () => {
    const { scrollYProgress } = useScroll();
    const heightStatus = useTransform(scrollYProgress, [0,1], ['0%', '100%'])

    return(
        <div style={{
            width: '.75%',
            height: '90vh',
            position: 'fixed',
            left: '0',
            bottom: '0',
            zIndex: 24,
            backgroundColor: 'var(--color-orange)',
            borderRight: '1px solid var(--color-orange)'
        }}>
            <motion.div style={{
                position: "relative",
                top: '0',
                left: '0',
                backgroundColor: 'var(--color-blue)',
                width: '99%',
                height: heightStatus

            }}></motion.div>
        </div>
    )
}

export default ScrollStatus