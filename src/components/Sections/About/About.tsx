import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="w-4/5 mx-auto">
        <h2 id="about-headline-2">Sobre Nosotros</h2>
        <div className="md:w-3/5 mx-auto mb-6">
          <p
            id="about-paragraph"
            className='text-graySlate dark:text-lightGray'
          >
            ¡Bienvenido a DevCafé Salta! Acá encontrarás un lugar en donde conectar con otros desarrolladores, intercambiar ideas, resolver dudas, avanzar en tus proyectos y muchas cosas más. No importa si eres un principiente o un experto, todos aquí estamos para apoyarnos y crecer como desarrolladores ¡Nos alegra que te unas a nosotros! 
          </p>
        </div>
        <h3
          id="about-headline-3"
          className='text-graySlate dark:text-lightGray'
        >
          ¡Sumáte a nuestra comunidad!
        </h3>
        <div id="about-buttons-container">  
            <a href="https://discord.gg/cYseMwpvJh" target="_blank">
            <div
                id="about-button-1"
                className='bg-softBlack dark:bg-graySlate'
            >
                <figure className="flex-initial w-12 mr-auto sm:mx-auto">
                <img
                    src="assets/other-assets/svg/social/discord-logo.svg"
                    alt=""
                    className="mr-auto sm:mx-auto w-10 h-10"
                />
                </figure>
                <p className="font-bold md:mx-auto text-smokeGray">
                Comunidad de discord
                </p>
            </div>
            </a>
          <a href="https://chat.whatsapp.com/Kxy7Kl87lWf0Ta1rhKdoE3" target="_blank">
            <div
                id="about-button-2"
                className='bg-softBlack dark:bg-graySlate'
            >
                <figure className="flex-initial w-12 mr-auto sm:mx-auto">
                <img
                    src="assets/other-assets/svg/social/whatsapp-logo.svg"
                    alt=""
                    className="mr-auto sm:mx-auto w-10 h-10"
                />
                </figure>
                <p className="font-bold md:mx-auto text-smokeGray">
                Grupo de WhatsApp
                </p>
            </div>
          </a>
          <a href="https://github.com/DevCafe-Salta" target="_blank">
            <div
                id="about-button-3"
                className='bg-softBlack dark:bg-graySlate'
            >
                <figure className="flex-initial w-12 mr-auto sm:mx-auto">
                <img
                    src="assets/other-assets/svg/social/github-logo.svg"
                    alt=""
                    className="mr-auto sm:mx-auto w-10 h-10"
                />
                </figure>
                <p className="font-bold md:mx-auto text-smokeGray">
                Comunidad de GitHub
                </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;