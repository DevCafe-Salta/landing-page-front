import { useTheme } from '../../../hooks/useTheme';
import './iconCarousel.css'
function IconCarousel() {

    const {theme} = useTheme();

    // Esto luego en los li se los puede hacer reutilizables
    return (
        <ul id="dev-icons-container">
            <li id="dev-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                <p className={!theme ? 'text-graySlate' : 'text-white' }>HTML</p>
            </li>
            <li id="dev-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                <p className={!theme ? 'text-graySlate' : 'text-white' }>CSS</p>
            </li>
            <li id="dev-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
                <p className={!theme ? 'text-graySlate' : 'text-white' }>Javascript</p>
            </li>
        </ul>
    )
}

export default IconCarousel