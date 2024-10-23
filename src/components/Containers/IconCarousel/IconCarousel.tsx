import './iconCarousel.css'
function IconCarousel() {
    // Esto luego en los li se los puede hacer reutilizables
    return (
        <ul id="dev-icons-container">
            <li id="dev-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                <p>HTML</p>
            </li>
            <li id="dev-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                <p>CSS</p>
            </li>
            <li id="dev-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
                <p>Javascript</p>
            </li>
        </ul>
    )
}

export default IconCarousel