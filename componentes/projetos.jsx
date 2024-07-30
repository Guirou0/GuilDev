import styles from '../css/projetos.module.css'
import { motion } from 'framer-motion'
import { useRef, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../contexts/themeContext'

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projetos = ({page, setPage}) => {
    const projetosRef = useRef(null)
    const { theme, antitheme } = useContext(ThemeContext)

    const [ modalState, setModalState ] = useState('close')
    const [ modalProject, setModalProject ] = useState(null)

    useEffect(()=>{
        if(page=='projetos'&&projetosRef) projetosRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setPage(null)
    }, page)

    const projectsVariants = {
        'hide': {
            scaleX: 0,
            borderRadius: 1000
        },
        'show': {
            scaleX: 1,
            borderRadius:  0,
            transition: {
                type: 'spring',
                duration: 1.5
            }
        }
    }

    const projectVariant = {
        'hide': {
            x: 1600
        },
        'show': {
            x: 0,
            transition: {
                type: 'spring',
                duration: 1.5,
                delay: 1.5
            }
        }
    }

    const modalVariant = {
        'close': {
            x: 2000,
            opacity: 0,
            transition: {
                duration: 1
            }
        },
        'open': {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1
            }
        }
    }

    const Modal = () => {

        return (
            <motion.div initial={'close'} animate={modalState} variants={modalVariant} className={styles.modal} style={{backgroundColor: theme}} >
                <button onClick={(e)=>{
                    setPage('sobre')
                    setModalProject(null)
                    setModalState('close')
                }}></button>

                {modalProject && modalProject.fotos?
                <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                >
                    {modalProject.fotos.map((foto, i)=> {
                        return <SwiperSlide key={i}><img alt='foto' style={{width: '85vw', height: '85vh', position: 'relative', left: '50%', transform: 'translateX(-50%)'}} src={`/${modalProject.nome}/${foto}`} /></SwiperSlide>
                    })}
                </Swiper>: <></>}

            </motion.div>
        )

    }

    const openModalWith = (path) => {
        setModalProject(path)
        setModalState('open')
    }

    const projects = {
        elook: {
            nome: 'e-look',
            url: 'https://guirou.pythonanywhere.com/',
            fotos: ['1.png', '2.png', '3.png', '4.png'],
            color: '#06C679',
            tools: ['react', 'javascript', 'python', 'flask', 'pandas']
        },
        solidariedade: {
            nome: 'solidariedade',
            url: 'https://solidariedade.site/',
            fotos: ['1.png', '2.png', '3.png', '4.png', '5.png'],
            color: '#F8B400',
            tools: ['html', 'css', 'javascript']
        },
        pokelist: {
            nome: 'pokeList',
            url: 'https://guirou0.github.io/PokeList/',
            fotos: ['1.png', '2.png'],
            color: '#DF2F52',
            tools: ['html', 'css', 'javascript']
        },
        heropath: {
            nome: 'heroPath',
            url: 'https://heropath.vercel.app/',
            fotos: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
            color: '#B66136',
            tools: ['react', 'javascript', 'node', 'express', 'axios']
        },
        nasaimg: {
            nome: 'nasaIMG',
            url: 'https://nasaimg.vercel.app/',
            fotos: ['1.png', '2.png', '3.png', '4.png'],
            color: '#191970',
            tools: ['react', 'javascript', 'node', 'express', 'axios']
        }
    }

    const icons = {
        c: {
            nome: 'C',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg'
        },
        javascript: {
            nome: 'Javascript',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
        },
        python: {
            nome: 'Python',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
        },
        racket: {
            nome: 'Racket',
            url: '/racket.png'
        },
        react: {
            nome: 'React',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
        },
        framer: {
            nome: 'Framer Motion',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg'
        },
        express: {
            nome: 'Express',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
        },
        axios: {
            nome: 'Axios',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg'
        },
        flask: {
            nome: 'Flask',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg'
        },
        pandas: {
            nome: 'Pandas',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg'
        },
        matplotlib: {
            nome: 'MatPlotLib',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg'
        },
        html: {
            nome: 'HTML',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
        },
        css: {
            nome: 'CSS',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
        },
        git: {
            nome: 'Git',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
        },
        vscode:{
            nome: 'VS Code',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'
        },
        vite: {
            nome: 'Vite',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg'
        },
        node: {
            nome: 'Node Js',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
        },
        arduino:{
            nome: 'Arduino IDE',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg'
        },
        firebase:{
            nome: 'Firebase',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg'
        },
        mysql: {
            nome: 'MySQL',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
        },
        postman: {
            nome: 'Postman',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg'
        }
    }
    

    const Projeto = ({paths, desc}) => {

        return (
            <motion.div className={styles.projeto} style={{borderColor: paths.color}} variants={projectVariant} >
                <img alt='foto' src={`/${paths.nome}/${paths.fotos[0]}`} onClick={(e)=>{
                    e.preventDefault();
                    openModalWith(paths)}
                    }/>
                <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                    <h2 style={{borderColor: paths.color}}>{paths.nome}</h2>
                    {paths.url && <a href={paths.url} style={{borderColor: paths.color}}>{paths.url}</a>}
                    <p>{desc}</p>
                    <ul>
                        {paths.tools.map((tool, i) => {
                            return <div className={styles.tools} key={i} title={icons[tool]['nome']} style={{backgroundImage: `url(${icons[tool]['url']})`}}></div>
                        })}
                    </ul>
                </div>
            </motion.div>
        )
    }

    return (
        <div className={styles.projetos} ref={projetosRef} style={{backgroundColor: theme, color: antitheme}}>
            <motion.div className={styles.utilitarios} initial='hide' whileInView='show' variants={projectsVariants} >
                <h1>Projetos de utilidade geral</h1>
                <Projeto paths={projects.elook} desc={
                    'Este é um projeto feito com a finalidade de facilitar o acesso aos dados das edições anteriores do Sisu e, assim, fornecer uma pequena ajuda para os milhares estudantes que desejam obter uma vaga nas instituições públicas de ensino. '
                }/>
                <Projeto paths={projects.solidariedade} desc={
                    'Site feito para armazenar os jogos e os conteúdos desenvolvidos durante o tempo de estágio em uma ONG voltada para a educação infantil.'
                }/>
            </motion.div>
            <motion.div className={styles.empresariais} initial='hide' whileInView='show' variants={projectsVariants} >
                <h1>Projetos de uso empresarial</h1>
                
            </motion.div>
            <motion.div className={styles.pessoais} initial='hide' whileInView='show' variants={projectsVariants} >
                <h1>Projetos pessoais</h1>
                <Projeto paths={projects.pokelist} desc={
                    'Meu primeiro projeto, foi inspirado na pokedex e lista os pokemons da primeira até a quinta geração, além de fornecer um insight do pokemon quando clicado.'
                } />
                <Projeto paths={projects.heropath} desc={
                    'Um site que te permite pesquisar sobre alguns dos heróis (e também vilões) da ficção.'
                } />
                <Projeto paths={projects.nasaimg} desc={
                    'O NasaIMG permite que o usuário consulte as mais variadas imagens disponibilizadas pela NASA a partir de um assunto de seu interesse. Além disso, também é possível conferir se existe alguma foto do rover Curiosity em Marte em uma data específica e ver a foto astronômica do dia.'
                } />
            </motion.div>
            <Modal />
        </div>
    )
}

export default Projetos