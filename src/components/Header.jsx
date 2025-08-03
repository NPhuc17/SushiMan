import React from 'react'


function Header() {
    return (
        <header>
            <nav className='flex overflow-hidden  header__nav'>
                <div className='flex flex-1 relative p-1.5  header__logo'>
                    <h4 className='p-1.5 text-white text-2xl uppercase font-[playfair-display]' data-aos="fade-down">Sushi Man</h4>
                    <div className='absolute inset-0 w-full bg-[var(--primary-color)] z-[-1]'></div>
                </div>
                <ul className='header_menu  header__menu' data-aos="fade-down">
                    <li>
                        <a href="#menu">Menu</a>
                    </li>
                    <li>
                        <a href="#food">Food</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <img src="src/assets/search.svg" alt="search" className='w-5 h-5 object-contain'/>
                    </li>
                </ul>

                <ul className='hidden  header__menu-mobile' data-aos="fade-down">
                    <li>
                        <img src="src/assets/menu.svg" alt="menu"/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header