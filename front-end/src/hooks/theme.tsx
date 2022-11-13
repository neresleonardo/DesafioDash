import React, { createContext, useState, useContext } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme;
}

interface IThemeProvider {
    children: React.ReactNode;
}

interface ITheme {
    title: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        button: string;
        info: string;
        warning: string;

        box: string;

        // Global

        whiteG: string,
    }
}


const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC<IThemeProvider>= ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const themeSaved = localStorage.getItem('desafio-falife:theme');

        if(themeSaved) {
            return JSON.parse(themeSaved);
        }else{
            return dark;
        }
    });

    const toggleTheme = () => {
        if(theme.title === 'dark'){
            setTheme(light);
            localStorage.setItem('desafio-falife:theme', JSON.stringify(light));
        }else{
            setTheme(dark);
            localStorage.setItem('desafio-falife:theme', JSON.stringify(dark));
        }
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);

    return context;
}


export { ThemeProvider, useTheme };