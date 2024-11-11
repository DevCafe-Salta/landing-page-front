const Footer = () => {
  return (
    <footer className="bg-orange w-full font-semibold phone:text-xs p-4">
      <div className="w-4/5 mx-auto flex flex-row phone:flex-col phone:gap-4 phone: justify-between place-items-stretch">
        <p className="text-softGray my-auto phone:text-center">©️ 2024 - Todos los derechos reservados</p>
        <figure className="flex flex-row gap-2 phone:mx-auto">
          <a href="https://chat.whatsapp.com/Kxy7Kl87lWf0Ta1rhKdoE3" target="_blank">
            <img src="/assets/other-assets/svg/social/whatsapp-logo.svg" alt="" className="w-10 h-10"/>
          </a>
          <a href="https://discord.gg/cYseMwpvJh" target="_blank">
            <img src="/assets/other-assets/svg/social/discord-logo.svg" alt="" className="w-10 h-10"/>
          </a>
          <a href="https://github.com/DevCafe-Salta" target="_blank">
            <img src="/assets/other-assets/svg/social/github-logo.svg" alt="" className="w-10 h-10"/>
          </a>
          <a href="https://www.instagram.com/devcafesalta?igsh=aGk2bW4wMnhybDI2" target="_blank">
            <img src="/assets/other-assets/svg/social/instagram-logo.svg" alt="" className="w-10 h-10"/>
          </a>
          <a href="https://www.linkedin.com/company/devcafé-salta/" target="_blank">
            <img src="/assets/other-assets/svg/social/linkedin-logo.svg" alt="" className="w-10 h-10"/>
          </a>
        </figure>
      </div>

    </footer>
  )
}

export default Footer