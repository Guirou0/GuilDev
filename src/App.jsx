import { useState, useContext } from 'react'
import './App.css'
import { ThemeContext } from '../contexts/themeContext'
import Navbar from '../componentes/navbar'
import ScrollStatus from '../componentes/scrollstatus'
import Landing from '../componentes/landing'
import Sobre from '../componentes/sobre'
import Habilidades from '../componentes/habilidades'
import Projetos from '../componentes/projetos'

function App() {
  const {theme, antitheme} = useContext(ThemeContext)
  const [page, setPage] = useState(null)

  return (
    <>
      <Navbar setPage={setPage}/>
      <ScrollStatus />
      <Landing page={page} setPage={setPage}/>
      <Sobre page={page} setPage={setPage}/>
      <Habilidades page={page} setPage={setPage} />  
      <Projetos page={page} setPage={setPage} />
    </>
  )
}

export default App
