import React from 'react'
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='pb-16'>
      <center>
        <h1 className="text-5xl font-semibold">Contacto</h1>
        <div className='mt-32 w-64'> 
        <a href='mailto:guidoarearte@gmail.com'><IoMdMail size={64} />Escribir un mensaje</a>
        </div>
       
        </center>
    </footer>
  )
}

export default Footer