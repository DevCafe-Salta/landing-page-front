import { createContext, useState } from "react";

interface ThemeContextType {
    theme: boolean;
    setTheme: (value: boolean) => void;
}

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType|undefined>(undefined);

export const ThemeProvider:React.FC<ThemeProviderProps> = ({children}) => {
    // false = modo claro, true = modo oscuro.
    const [theme, setTheme] = useState(true);
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}