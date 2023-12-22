import React from 'react'

const Navbar = () => {
  return (
    
     <nav className='py-11 bg-white w-full fixed'>
    <div className='float-left ml-16'>
     <h1 className='font-semibold text-3xl text-sky-950'>Guido Rearte</h1>
     </div>
    
    <div className='text-black float-right mr-16 '>
    <ul className='none  '>
    <a href="#about">  <li className='float-left ml-4'>ACERCA DE MI</li></a>
    <a href="#skills">  <li className='float-left ml-4'>CONOCIMIENTOS</li></a>
    <a href="#projects"> <li className='float-left ml-4'>PROYECTOS</li></a>
    <a href="#contact"> <li className='float-left ml-4'>CONTACTO</li></a>
      </ul>
    </div>
    </nav>

  )
}

export default Navbar