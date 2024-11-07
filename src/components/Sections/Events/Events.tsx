import "./Events.css";
import { useTheme } from "../../../hooks/useTheme";
const Events = () => {
  const { theme } = useTheme();
  return (
    <section id="events">
      <div className="w-4/5 mx-auto">
        <h2 id="events-headline-2">Eventos</h2>
        <h3
          id="events-headline-3"
          className={!theme ? "text-graySlate" : "text-lightGray"}
        >
          Conoce nuestros proximos eventos
        </h3>
        <div className="flex flex-col desktop:flex-row">
          <div className="flex flex-col desktop:w-1/2 p-6">
            <h4 className="text-3xl text-center p-4 underline decoration-orange font-semibold underline-offset-8 decoration-4">
              Taller de testing con Python
            </h4>
            <p className="text-graySlate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              sapiente. Mollitia ducimus, incidunt deleniti quae illum nesciunt
              iste fugiat eum, quisquam inventore veniam ipsum quas
              consequuntur! Quis commodi officia dignissimos.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              modi, voluptate cum odio maxime qui debitis doloribus consequuntur
              incidunt molestias provident repudiandae dicta eligendi nemo
              numquam odit, neque consectetur eaque.
            </p>
            <div className="flex flex-col tablet:flex-row desktop:flex-row w-full mt-4 p-4 gap-2">
              <div className="basis-1/2 phone:mx-auto">
                <div className="flex items-center gap-4 phone:mx-auto">
                  <figure>
                    <img
                      src="assets/other-assets/svg/common/location.svg"
                      width="20"
                      height="40"
                      alt=""
                    />
                  </figure>
                  <p className="font-bold text-graySlate">Av. Sarmiento 760</p>
                </div>
                <div className="flex items-center gap-4 phone:mx-auto">
                  <figure>
                    <img
                      src="assets/other-assets/svg/common/calendar.svg"
                      width="20"
                      height="40"
                      alt=""
                    />
                  </figure>
                  <p className="font-bold text-graySlate">19/10/2024</p>
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
                  <p className="font-bold text-graySlate">10:00HS - 13:00HS</p>
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
                src="img/project-img.jpg"
                alt=""
                className="mx-auto rounded-sm"
              />
            </figure>
            <button className="p-4 phone:p-2 phone:text-base bg-orange text-softGray rounded-sm text-2xl font-semibold">
              Mas información
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
