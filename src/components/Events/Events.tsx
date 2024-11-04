export const Event=()=>{
    return(
    <div className="min-h-screen bg-devCafeBlack flex flex-col py-10 px-16 ">
      <h1 className="font-w-700-devCafe orange-devCafe w-full">Eventos</h1>
      <p className="text-base textColor-devCafe text-center pFont-devCafe">Conoce nuestros proximos eventos</p>
      <div className="flex">
          <div className="flex flex-col w-1/2 p-6">
            <h2 className="text-3xl h3-devCafe text-center h3-border p-4 font-monserrat-noW">Taller de testing con Python</h2>
            <p className="text-base textColor-devCafe pFont-devCafe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sapiente. Mollitia ducimus, incidunt deleniti quae illum nesciunt iste fugiat eum, quisquam inventore veniam ipsum quas consequuntur! Quis commodi officia dignissimos.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi, voluptate cum odio maxime qui debitis doloribus consequuntur incidunt molestias provident repudiandae dicta eligendi nemo numquam odit, neque consectetur eaque.
            </p>
            <div className="flex w-full">
              <div className="flex flex-col w-1/2">
                <div className="flex items-center gap-3">
                    <svg width="20" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 0C6.26 0 0 6.26 0 14C0 24.5 14 40 14 40C14 40 28 24.5 28 14C28 6.26 21.74 0 14 0ZM14 19C11.24 19 9 16.76 9 14C9 11.24 11.24 9 14 9C16.76 9 19 11.24 19 14C19 16.76 16.76 19 14 19Z" fill="#DB4A2B"/>
                    </svg>
                    <p className="font-montserrat h3-devCafe">Av. Sarmiento 760</p>
                </div>
                <div className="flex items-center gap-3">
                <svg width="20" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_344_1744)">
                    <path d="M38 8H36V4H32V8H16V4H12V8H10C7.78 8 6.02 9.8 6.02 12L6 40C6 42.2 7.78 44 10 44H38C40.2 44 42 42.2 42 40V12C42 9.8 40.2 8 38 8ZM38 40H10V20H38V40ZM18 28H14V24H18V28ZM26 28H22V24H26V28ZM34 28H30V24H34V28ZM18 36H14V32H18V36ZM26 36H22V32H26V36ZM34 36H30V32H34V36Z" fill="#DB4A2B"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_344_1744">
                    <rect width="48" height="48" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <p className="font-montserrat h3-devCafe">19/10/2024</p>
                </div>
                <div className="flex items-center gap-3">
                    <svg width="20" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.98 0C8.94 0 0 8.96 0 20C0 31.04 8.94 40 19.98 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 19.98 0ZM26.58 29.42L18 20.82V10H22V19.18L29.42 26.6L26.58 29.42Z" fill="#DB4A2B"/>
                    </svg>
                    <p className="font-montserrat h3-devCafe">10:00HS - 13:00HS</p>
                </div>
              </div>
              <div className="w-1/2 rounded-xl bg-red-50">
  
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around items-center w-1/2">
            <button className="mt-60 bg-devCafe py-2 px-1 h3-devCafe rounded-xl font-montserrat shadowButton">Mas informacion</button>
  
          </div>
      </div>
  
      {/* 2 flex */}
      <div className="flex flex-row-reverse">
          <div className="flex flex-col w-1/2 p-6">
            <h2 className="text-3xl h3-devCafe text-center h3-border p-4 font-monserrat-noW">Taller de testing con Python</h2>
            <p className="text-base textColor-devCafe pFont-devCafe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sapiente. Mollitia ducimus, incidunt deleniti quae illum nesciunt iste fugiat eum, quisquam inventore veniam ipsum quas consequuntur! Quis commodi officia dignissimos.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi, voluptate cum odio maxime qui debitis doloribus consequuntur incidunt molestias provident repudiandae dicta eligendi nemo numquam odit, neque consectetur eaque.
            </p>
            
          </div>
          <div className="flex flex-col justify-around items-center w-1/2">
            <button className="mt-60 bg-devCafe py-2 px-1 h3-devCafe rounded-xl font-montserrat shadowButton">Mas informacion</button>
  
          </div>
      </div>
    </div> 
    )
  }