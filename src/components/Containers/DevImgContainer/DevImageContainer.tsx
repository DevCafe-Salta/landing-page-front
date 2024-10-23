import './devImageContainer.css'
function DevImageContainer() {
    return (
        <>
            <img src="/img/dev-img.jpg" alt="dev-img" className=''/>
            <img src="/img/dev-img.jpg" alt="dev-img" className='right-4'/>
            <img src="/img/dev-img.jpg" alt="dev-img" className='right-8'/>
            <img src="/img/dev-img.jpg" alt="dev-img" className='right-12'/>
            <div id="overlay" className='z-50'></div>
            <p>+3</p>
        </>
    )
}

export default DevImageContainer