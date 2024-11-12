import "./Events.css";
const Events = () => {
  return (
    <section id="events">
      <div className="w-4/5 mx-auto">
        <h2 id="events-headline-2">Eventos</h2>
        <h3
          id="events-headline-3"
          className='text-graySlate dark:text-lightGray'
        >
          Conoce nuestros proximos eventos
        </h3>
        <div className="flex flex-col desktop:flex-row">
          <div className="flex flex-col desktop:w-1/2 p-6">
            <h4 id="event-title" className='text-graySlate dark:text-lightGray'>
              2do Cowork Day de la comunidad DevCafé Salta
            </h4>
            <p className='text-graySlate dark:text-lightGray'>
            El próximo 15 de noviembre del 2024 queremos invitarte a un día de coworking donde podrás trabajar, colaborar y compartir ideas en un ambiente productivo y motivador. Desde las 9:00 AM hasta las 18:30 PM, tendremos un espacio abierto para que puedas avanzar en tus proyectos, conocer a otras personas y generar nuevas conexiones (Capacidad máxima de 30 personas).
            </p>
            <div className="flex flex-col tablet:flex-row desktop:flex-row w-full mt-4 p-4 gap-2">
              <div className="basis-1/2 phone:mx-auto">
              {/* UBICACIÓN DEL EVENTO */}
                {/* <div className="flex items-center gap-4 phone:mx-auto">
                  <figure>
                    <img
                      src="assets/other-assets/svg/common/location.svg"
                      width="20"
                      height="40"
                      alt=""
                    />
                  </figure>
                  <p className='text-graySlate dark:text-lightGray font-bold'>Av. Sarmiento 760</p>
                </div> */}
                <div className="flex items-center gap-4 phone:mx-auto">
                  <figure>
                    <img
                      src="assets/other-assets/svg/common/calendar.svg"
                      width="20"
                      height="40"
                      alt=""
                    />
                  </figure>
                  <p className='text-graySlate dark:text-lightGray font-bold'>15/11/2024</p>
                </div>
                <div className="flex items-center gap-4 phone:mx-auto">
                  <figure>
                    <img
                      src="assets/other-assets/svg/common/time.svg"
                      width="20"
                      height="40"
                      alt=""
                    />
                  </figure>
                  <p className='text-graySlate dark:text-lightGray font-bold'>09:00HS - 18:30HS</p>
                </div>
              </div>
              <div className="basis-1/2 rounded-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115859.3163323473!2d-65.50600545930924!3d-24.843225028964614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3bcaa4146a5%3A0x5858d5a81b90c139!2sPlaza%209%20de%20Julio!5e0!3m2!1ses-419!2sar!4v1731014804224!5m2!1ses-419!2sar"
                  className="h-auto w-full rounded-sm"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* <div className="basis-1/2  bg-slate-500" >Hola mundo</div> */}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 desktop:w-1/2 p-8">
            <figure className="w-4/5 phone:w-full mx-auto text-center">
              <img
                src="assets/images/2do-cowork-img.webp"
                alt=""
                className="mx-auto rounded-sm"
                aria-label="Cowork day, capacidad máxima de 30 personas"
              />
            </figure>
            {/* <button className="p-4 phone:p-2 phone:text-base bg-orange text-softGray rounded-sm text-2xl font-semibold">
              Mas información
            </button> */}
            <button className="p-4 phone:p-2 phone:text-base bg-orange text-softGray opacity-30 rounded-sm text-2xl font-semibold">
              No disponible
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
