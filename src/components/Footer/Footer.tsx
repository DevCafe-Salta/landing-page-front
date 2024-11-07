const Footer = () => {
  return (
    <footer className="bg-orange w-full font-bold phone:text-xs p-4">
      <div className="w-4/5 mx-auto flex flex-row phone:flex-col phone:gap-4 phone: justify-between place-items-stretch">
        <p className="text-softGray my-auto phone:text-center">©️ 2024 - Todos los derechos reservados</p>
        <figure className="flex flex-row gap-2 phone:mx-auto">
          <img src="/assets/other-assets/svg/social/discord-logo.svg" alt="" className="w-10 h-10"/>
          <img src="/assets/other-assets/svg/social/github-logo.svg" alt="" className="w-10 h-10"/>
          <img src="/assets/other-assets/svg/social/instagram-logo.svg" alt="" className="w-10 h-10"/>
          <img src="/assets/other-assets/svg/social/linkedin-logo.svg" alt="" className="w-10 h-10"/>
          <img src="/assets/other-assets/svg/social/whatsapp-logo.svg" alt="" className="w-10 h-10"/>
        </figure>
      </div>

    </footer>
  )
}

export default Footer