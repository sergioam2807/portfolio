import React from 'react';
import "./header.css";

export default function Header() {

    return(
        <>
            <div className='header__container'>
                <div className='header__section'>
                    <h1 className='header__title'>Sergio Alvarez</h1>
                    <h3 className='header__subtitle'>Front End Developer</h3>
                    <p className='header__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    
                    <div class="button" data-tooltip="Size: NOSE">
                    <div class="button-wrapper">
                    <div class="text">Descargar CV</div>
                        <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                        </span>
                    </div>
                    </div>

                </div>
                <div className='header__img'>
                </div>
            </div>
        </>
        
    );
}