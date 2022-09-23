import React from 'react'

function Services() {
  return (
    <section id="servicos">
      <div className="flex flex-col gap-10 justify-center items-center my-10">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
          data-aos-delay="50"
          className="relative max-w-xs rounded-lg overflow-hidden shadow-lg hover:ring-1 hover:bg-cyan-400 group"
        >
          <img className="w-full" src="/life-guard.jpg" alt="Guardião de Piscina" />
          <div className="absolute top-[35%] left-[25%] w-36 bg-cyan-400 rounded-full p-5 group-hover:bg-white border-transparent border-4 group-hover:border-cyan-400">
            <img src="/guardiao-icon.png" alt="ícone de guardião" />
          </div>
          <div className="px-6 py-4 relative text-center mt-20">
            <div className="font-bold text-xl mb-2">Guardião de Piscina</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, quis.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="50"
          className="relative max-w-xs rounded-lg overflow-hidden shadow-lg hover:ring-1 hover:bg-cyan-400 group"
        >
          <img className="w-full" src="/tratamento-de-piscinas.jpg" alt="Guardião de Piscina" />
          <div className="absolute top-[35%] left-[25%] w-36 bg-cyan-400 rounded-full p-5 group-hover:bg-white border-transparent border-4 group-hover:border-cyan-400">
            <img src="/tratament-piscinas.png" alt="ícone de guardião" />
          </div>
          <div className="px-6 py-4 relative text-center mt-20">
            <div className="font-bold text-xl mb-2">Tratamento de Piscinas</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, quis.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="50"
          data-aos-once="true"
          data-aos-anchor-placement="center-bottom"
          className="relative max-w-xs rounded-lg overflow-hidden shadow-lg hover:ring-1 hover:bg-cyan-400 group"
        >
          <img className="w-full" src="/manutencao-de-piscinas.jpg" alt="Guardião de Piscina" />
          <div className="absolute top-[35%] left-[25%] w-36 bg-cyan-400 rounded-full p-5 group-hover:bg-white border-transparent border-4 group-hover:border-cyan-400">
            <img src="/manutencao.png" alt="ícone de guardião" />
          </div>
          <div className="px-6 py-4 relative text-center mt-24">
            <div className="font-bold text-xl mb-2">Manutenção de Piscinas</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, quis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
