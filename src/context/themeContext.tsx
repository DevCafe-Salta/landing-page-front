import { createContext, useState } from "react";

interface ThemeContextType {
    theme: boolean;
    toggleDarkTheme: () => void;
}

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType|undefined>(undefined);

export const ThemeProvider:React.FC<ThemeProviderProps> = ({children}) => {
    // false = modo claro, true = modo oscuro.
    const [theme, setTheme] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : true;
    });
    const toggleDarkTheme = () => {
        const newTheme = !theme;
        setTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
        document.documentElement.classList.toggle('dark', newTheme);
    }
    return (
        <ThemeContext.Provider value={{theme, toggleDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}