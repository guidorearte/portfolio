import Navbar from "./components/Navbar"
import NavbarResponsive from "./components/NavbarResponsive"
import Footer from "./components/Footer"
import gradmin from './assets/presentacion-gradmin.png'
import grhotels from './assets/presentacion-grhotels.png'
import guido from './assets/guido.jpg'
import { FaGithub } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"

function App() {

  return (
    <div className="overflow-hidden">
      <div className="max-lg:hidden">
        <Navbar />
      </div>
      <div>
        <NavbarResponsive />
      </div>
      <div className="grid grid-cols-2 mt-32 max-lg:grid-cols-1">
        <div className="ml-56 max-lg:ml-0 "> 
          <img className="w-72 h-72 rounded-full max-lg:justify-center" src={guido} />
        </div>
        <div className="mr-56 max-lg:mr-0">
        <h1 className="text-3xl mt-8">Hola, me llamo Guido Rearte</h1>
          <h1 className="text-5xl font-bold mt-4">¡Soy Frontend Developer! </h1>
          <div className="mt-12 flex ">  
            <a className="float-left" href="https://github.com/guidorearte"><FaGithub size={40} /></a>
          <a className="float-left" href="https://www.linkedin.com/in/guidorearte/"><FaLinkedin size={40} /></a>
          <button className="rounded-2xl border-2 border-gray-500 p-0 " href="/ruta/a/tu/archivo.pdf" download>Descargar CV</button>
          </div>
        </div>
      </div>
          <div id='about' className="mt-36">
        <center>
          <h1 className="text-5xl font-semibold">Acerca de mi</h1>
<p className="mt-16 text-lg">En 2015, empecé a estudiar la carrera de análisis de sistemas en el instituto Raúl Scalabrini Ortiz. <br></br>
Luego a mediados del 2017, me gusto y me intereso mucho el mundo del desarrollo web, así que <br></br>
comencé a estudiar el curso de desarrollo web en Acamica de manera online. <br></br>
Siento pasión por el desarrollo web, ya que me gusta crear cosas que resuelven problemas digitales. <br></br>
Finalmente, en julio del 2019, logre graduarme de la carrera de análisis de sistemas, que me brindo <br></br>
las bases necesarias para analizar, solucionar y tomar la retroalimentación para mejorar. <br></br>
Ahora mismo, busco una nueva oportunidad para brindar mis conocimientos y seguir aprendiendo aun mas.</p>
          </center>
        
      </div>
      <div id='skills' className="mt-36">
        <center>
          <h1 className="text-5xl font-semibold">Conocimientos</h1>
          <div className="text-lg grid grid-cols-2 mt-16 mx-48 max-lg:grid-cols-1 max-lg:mx-0">
            <div>
              <ul >
                <li>React js</li>
                <li>Redux toolkit</li>
                <li>React router</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
            <ul>
                <li>Node js</li>
                <li>Express</li>
                <li>Mongo DB</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
          </center>
        
      </div>
      <div id='projects' className="mt-36">
        <center>
          <h1 className="text-5xl font-semibold">Proyectos</h1>
          <div className="grid grid-cols-2 gap-8 mx-56 mr-56 mt-16 max-lg:mx-0 max-lg:grid-cols-1">
            <div>
              <h3 className="mt-16 text-2xl font-bold">GR Admin</h3>
              <p className="mt-6 text-lg">Plataforma web construida con React, Redux toolkit,   
              Node js, express y mongo DB. Consiste en agregar, eliminar y editar registros. 
              Se puede Ordenar los registros de forma ascendente y descendente.
              </p>
              <img className="w-96" src={gradmin} />
              <a className="px-4 rounded-lg ml-4 border-2 border-gray-500" href="https://frontend-gradmin.vercel.app/">Ver proyecto</a>
              <a className="px-4 rounded-lg ml-4 border-2 border-gray-500" href="https://github.com/guidorearte/frontend-gradmin">Ver codigo</a>
            </div>
            <div>
              <h3 className="mt-16 text-2xl font-bold">GR Hotels</h3>
              <p className="mt-6 text-lg">Pagina web con tematica de un hotel  
              construida con React, tailwind css, react bootstrap y react swiper. Se puede navegar, 
              ver informacion en cada seccion, y se puede ver las imagenes a traves de una galeria.   </p>
              <img className="w-96" src={grhotels} />
              <a className="px-4 rounded-lg ml-4 border-2 border-gray-500" href="https://gr-hotels.vercel.app/">Ver proyecto</a>
              <a className="px-4 rounded-lg ml-4 border-2 border-gray-500" href="https://github.com/guidorearte/gr-hotels">Ver codigo</a>
            </div>
          </div>
        </center>
        
      </div>
      <div id='contact' className="mt-36">
      <Footer />
      </div>
    
    </div>
  )
}

export default App
