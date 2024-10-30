import About from '../About/About'
import Projects from '../Projects/Projects'
import Hero from '../Hero/Hero'
import { ThemeProvider } from '../../../context/themeContext'
// import Events from '../Events/Events'
const Home = () => {
    return (
        <div>
            <ThemeProvider>
                <Hero/>
                <About />
                <Projects/>
            </ThemeProvider>
            {/* <Events/> */}
            {/* <Projects /> */}
        </div>
    )
}
export default Home