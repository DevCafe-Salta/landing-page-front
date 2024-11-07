import Hero from '../Hero/Hero'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Events from '../Events/Events'
import HorizontalRule from '../../HorizontalRule/HorizontalRule'
import { ThemeProvider } from '../../../context/themeContext'
import { useTheme } from '../../../hooks/useTheme'
const Home = () => {
    const {theme} = useTheme();
    return (
        <ThemeProvider>
            <div className={!theme ? 'bg-softGray': 'bg-softBlack'}>
                <Hero/>
                <About />
                <HorizontalRule/>
                <Projects/>
                <HorizontalRule/>
                <Events/>
            </div>
        </ThemeProvider>
    )
}
export default Home