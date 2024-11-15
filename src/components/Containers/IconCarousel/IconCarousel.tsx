import './iconCarousel.css'
function IconCarousel() {

    return (
        <ul id="dev-icons-container">
            <li id="dev-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                <p className='text-graySlate dark:text-white'>HTML</p>
            </li>
            <li id="dev-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                <p className='text-graySlate dark:text-white'>CSS</p>
            </li>
            <li id="dev-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
                <p className='text-graySlate dark:text-white'>Javascript</p>
            </li>
        </ul>
    )
}

export default IconCarousel