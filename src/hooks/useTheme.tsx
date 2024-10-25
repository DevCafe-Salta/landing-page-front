import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if(!context) {
        throw new Error("useTheme can only be used with a ThemeContext Provider")
    }

    return context;
}