import {useState} from 'react';
import {ImMenu} from 'react-icons/im'


const NavbarResponsive = () => {

    const [menu,  setMenu] = useState(false);

 const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div className="h-12 bg-white w-full fixed lg:hidden">
<ImMenu size="2em"  onClick={handleClick} />
{menu ?
<nav className="absolute -mt-8 flex w-64 h-screen bg-gray-300">
<ul>
	 <span className="ml-60" onClick={handleClick} >X</span>
   <a href="#about">  <li className='mb-1'>ACERCA DE MI</li></a>
    <a href="#skills">  <li className='mb-1'>CONOCIMIENTOS</li></a>
    <a href="#projects"> <li className='mb-1'>PROYECTOS</li></a>
    <a href="#contact"> <li className='mb-1'>CONTACTO</li></a>
	</ul>
</nav>
        :
        <></>
      }
</div>	
  )
}

export default NavbarResponsive