import { HouseLine } from 'phosphor-react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Services from '../components/Services'

function Home() {
  return (
    <>
      <div className="bg-hero-pattern h-[80vh] relative flex flex-col justify-between overflow-hidden">
        <div id="svg-hero-top-pattern">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
            <path fill="#0099ff" fill-opacity="0.8" d="M0,128L0,160L1440,160L1440,0L0,0L0,0Z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#0099ff"
              fill-opacity="0.8"
              d="M0,256L60,218.7C120,181,240,107,360,90.7C480,75,600,117,720,144C840,171,960,181,1080,170.7C1200,160,1320,128,1380,112L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div id="navbar" className="absolute top-0 w-full">
          <Header />
        </div>
        <div className="relative bg-gray-gradient py-4 -top-20 md:absolute md:top-16">
          <h1 className="text-5xl text-gradient font-extrabold ml-4 max-w-[400px]">
            Pronto para <span>ajudar</span>
          </h1>
        </div>
        <div className="absolute bottom-5 -right-10 w-[350px] md:w-[500px] md:right-[20%]">
          <img src="/guardiao-piscina.png" />
        </div>
        <div id="svg-hero-bottom-pattern">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="relative top-1">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,256L60,218.7C120,181,240,107,360,90.7C480,75,600,117,720,144C840,171,960,181,1080,170.7C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
          <div className="relative flex flex-col items-center gap-2 bottom-0 bg-[#0099ff] z-50 w-full justify-center py-5">
            <a className="bg-[#253041] mx-4 px-10 py-4 rounded-lg text-white text-2xl flex gap-4 items-center justify-center w-fit">
              <img src="building.png" width={26} className="before-shape" />
              <span className="whitespace-nowrap">Serviços Comerciais</span>
            </a>
            <a className="bg-[#0052da] mx-4 px-10 py-4 rounded-lg text-white text-2xl flex gap-4 items-center justify-center w-fit">
              <HouseLine size={32} className="before-shape" />
              <span className="whitespace-nowrap">Serviços Residenciais</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-black my-10 mx-6 ">
          Nossa empresa foca em{' '}
          <span className="underline decoration-cyan-400 decoration-wavy decoration-4 underline-offset-4">
            três serviços
          </span>{' '}
          essenciais
        </h2>
        <Services />
      </div>
      <Footer />
    </>
  )
}

export default Home
