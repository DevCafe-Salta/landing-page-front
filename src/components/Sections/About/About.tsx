const About = () => {
  return(
      <section className="w-4/5 mx-auto mt-20" id="about">
          <h2 className="text-3xl font-bold  text-orange sm:text-5xl text-center mb-2">Sobre Nosotros</h2>
          <div className="md:w-3/5 mx-auto mb-6">
              <p className="p-2 text-left sm:text-center text-lightGray">
                  Lorem ipsum dolor sit amet consectetur. Tempus leo eget enim et tincidunt et lacus. Laoreet mi sed adipiscing at habitasse eu. Tincidunt sed neque in congue orci dui. Viverra volutpat id odio sit. Lorem ipsum dolor sit amet consectetur. Tempus leo eget enim et tincidunt et lacus. Laoreet mi sed adipiscing at habitasse eu. Tincidunt sed neque in congue orci dui. Viverra volutpat id odio sit.
              </p>
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">¡Sumáte a nuestra comunidad!</h3>
          <div className="flex flex-col text-center gap-4 mx-auto justify-center items-center lg:flex-row">
              <div className="flex bg-graySlate p-4 rounded-full justify-center items-center shadow gap-4 w-72">
                <figure className="flex-initial w-12 mr-auto sm:mx-auto">
                    <img src="assets/other-assets/svg/social/discord-logo.svg" alt="" className="mr-auto sm:mx-auto w-10 h-10"/>
                </figure>
                <p className="font-bold md:mx-auto">
                    Comunidad de discord
                </p>
              </div>
              <div className="flex bg-graySlate p-4 rounded-full justify-center items-center shadow gap-4 w-72">
                  <figure className="flex-initial w-12 mr-auto sm:mx-auto">
                      <img src="assets/other-assets/svg/social/whatsapp-logo.svg" alt="" className="mr-auto sm:mx-auto w-10 h-10"/>
                  </figure>
                  <p className="font-bold md:mx-auto">
                      Grupo de WhatsApp
                  </p>
              </div>
              <div className="flex bg-graySlate p-4 rounded-full justify-center items-center shadow gap-4 w-72">
                  <figure className="flex-initial w-12 mr-auto sm:mx-auto">
                      <img src="assets/other-assets/svg/social/github-logo.svg" alt="" className="mr-auto sm:mx-auto w-10 h-10"/>
                  </figure>
                  <p className="font-bold md:mx-auto">
                      Comunidad de GitHub
                  </p>
              </div>
          </div>
      </section>
  )
}

export default About;