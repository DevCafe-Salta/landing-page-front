import React from 'react';
import FondoDestok from '../../../../public/assets/images/Destok.gif';
import Mobile from '../../../../public/assets/images/Mobile.gif';
import logo from '../../../../public/assets/other-assets/svg/common/dev-cafe-logo.svg';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div
        className={`absolute inset-0 bg-no-repeat bg-center transition-all duration-500
          phone:bg-[url('../../../../public/assets/images/Mobile.gif')]
          tablet:bg-[url('../../../../public/assets/images/Destok.gif')]
          desktop:bg-[url('../../../../public/assets/images/Destok.gif')]`}
        style={{
          backgroundSize: '150%',
          filter: 'blur(2px)',
        }}
      >
      </div>

      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center text-white bg-black/50 p-4">
        <div className="flex-1 flex flex-col items-center justify-center mb-8 lg:mb-0">
          <img
            src={logo}
            alt="Logo"
            className="w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80" // Aumenta el tamaño aquí para desktop
          />
          <span className="text-orange text-2xl sm:text-3xl lg:text-4xl font-bold mt-3">
            Salta
          </span>
        </div>

        <div className="flex-1 flex flex-col items-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center " style={{ lineHeight: '1.3' }}>
            Comunidad IT de la <br /> Provincia de <span className="text-orange">Salta</span>
          </h2>
          <div className="flex flex-col space-y-4">
            <button className="px-8 py-2 text-lg sm:px-10 sm:text-xl bg-orange hover:border-graySlate text-white font-medium rounded-lg opacity-100 hover:opacity-80 transition duration-300">
              Uníte a nuestra comunidad
            </button>
            <button className="px-6 py-2 text-lg sm:text-xl bg-gray-700 hover:bg-gray-800 text-white font-medium rounded-lg opacity-80 hover:opacity-100 hover:border-orange transition duration-300">
              Ver Eventos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
