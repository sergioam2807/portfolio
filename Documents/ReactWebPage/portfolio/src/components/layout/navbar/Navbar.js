import React from 'react'
import "./navBar.css";



export const Navbar = () => {

  
  return (
    <nav>
    {/* <h2>{name}</h2> */}
        <ul className='nav-list'>
                <li className='link'>Sobre Mí</li>
                <li className='link'>Descargar CV</li>
                <li className='link'>Habilidades</li>
                <li className='link'>Contacto</li>
        </ul>
    </nav>
  )
}
