import "./About.css";
import { useTheme } from "../../../hooks/useTheme";

const About = () => {
    const {theme} = useTheme();
    return(
      <section className={!theme ? "bg-softGray" : "bg-softBlack" } id="about">
        <div className="w-4/5 mx-auto">
          <h2 id="about-headline-2">Sobre Nosotros</h2>
          <div className="md:w-3/5 mx-auto mb-6">
              <p id="about-paragraph" className={!theme ? "text-graySlate" : "text-lightGray"}>
                  Lorem ipsum dolor sit amet consectetur. Tempus leo eget enim et tincidunt et lacus. Laoreet mi sed adipiscing at habitasse eu. Tincidunt sed neque in congue orci dui. Viverra volutpat id odio sit. Lorem ipsum dolor sit amet consectetur. Tempus leo eget enim et tincidunt et lacus. Laoreet mi sed adipiscing at habitasse eu. Tincidunt sed neque in congue orci dui. Viverra volutpat id odio sit.
              </p>
          </div>
          <h3 id="about-headline-3" className={!theme ? "text-graySlate" : "text-lightGray"}>
            ¡Sumáte a nuestra comunidad!
          </h3>
          <div id="about-buttons-container">
              <div id="about-button-1" className={!theme ? 'bg-[#131414]' : 'bg-[#3D3D3D]'}>
                <figure className="flex-initial w-12 mr-auto sm:mx-auto">
                    <img src="assets/other-assets/svg/social/discord-logo.svg" alt="" className="mr-auto sm:mx-auto w-10 h-10"/>
                </figure>
                <p className="font-bold md:mx-auto text-smokeGray">
                    Comunidad de discord
                </p>
              </div>
              <div id="about-button-2" className={!theme ? 'bg-[#131414]' : 'bg-[#3D3D3D]'}>
                  <figure className="flex-initial w-12 mr-auto sm:mx-auto">
                      <img src="assets/other-assets/svg/social/whatsapp-logo.svg" alt="" className="mr-auto sm:mx-auto w-10 h-10"/>
                  </figure>
                  <p className="font-bold md:mx-auto text-smokeGray">
                      Grupo de WhatsApp
                  </p>
              </div>
              <div id="about-button-3" className={!theme ? 'bg-[#131414]' : 'bg-[#3D3D3D]'}>
                  <figure className="flex-initial w-12 mr-auto sm:mx-auto">
                      <img src="assets/other-assets/svg/social/github-logo.svg" alt="" className="mr-auto sm:mx-auto w-10 h-10"/>
                  </figure>
                  <p className="font-bold md:mx-auto text-smokeGray">
                      Comunidad de GitHub
                  </p>
              </div>
          </div>
        </div>
      </section>
    )
}

export default About;