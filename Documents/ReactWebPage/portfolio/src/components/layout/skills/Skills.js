import React from 'react'
// import { Card } from './card/Card';
import './skills.css'
import img1 from './../../../img/iconos/github.png';
import img2 from './../../../img/iconos/css-3.png';
import img3 from './../../../img/iconos/html-5.png';
import img4 from './../../../img/iconos/physics.png';
import img5 from './../../../img/iconos/js.png';



export const Skills = () => {
  return (
    <>
      <div className='skills__container'>
          <h2>Mis Habilidades</h2>

          <div className='skills__container__img'>
            <img src={img3} className='skills__img' />
            <img src={img2} className='skills__img' />
            <img src={img4} className='skills__img' />
            <img src={img5} className='skills__img' />
          </div>

        </div>
        


    </>
  )
}
