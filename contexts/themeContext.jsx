import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('var(--color-dark)')
    const [antitheme, setAntiTheme] = useState('var(--color-white)')

   /*  useEffect(() => {
        let storetheme = localStorage.getItem('theme')
        if (storetheme){
            setTheme(storetheme)
            setAntiTheme(storetheme=='var(--color-dark)'? 'var(--color-white)': 'var(--color-dark)')
        }
    }, [])
 */

    const toggleTheme = () => {
        setTheme(theme=='var(--color-dark)'? 'var(--color-white)': 'var(--color-dark)')
        setAntiTheme(theme=='var(--color-dark)'? 'var(--color-dark)': 'var(--color-white)')
        localStorage.setItem('theme', theme=='var(--color-dark)'? 'var(--color-white)': 'var(--color-dark)')
        //window.location.reload();
    }


    return <ThemeContext.Provider value={{theme, antitheme, toggleTheme}}>{children}</ThemeContext.Provider>
}