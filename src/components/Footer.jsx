import React from 'react'

function Footer() {
  return (
    <footer className="w-full flex items-center justify-center gap-20 flex-wrap bg-[var(--color-white)] overflow-hidden px-5 py-11">
    <h3 className="font-bold font-[playfair-display] text-[1.5rem] uppercase text-[var(--secondary-color)] cursor-pointer">
      <span className='text-[var(--primary-color)]'>Sushi</span>man
    </h3>

    <ul className="footer_ul">
      <li className='footer_nav_li'><a href="#menu">Menu</a></li>
      <li className='footer_nav_li'><a href="#food">Food</a></li>
      <li className='footer_nav_li'><a href="#services">Services</a></li>
      <li className='footer_nav_li'><a href="#about">About Us</a></li>
    </ul>

    <ul className="footer_ul">
      <li className="footer_social">
        <img src="src/assets/facebook.svg" alt="facebook" className='footer_social_img' />
      </li>
      <li className="footer_social">
        <img src="src/assets/instagram.svg" alt="instagram" className='footer_social_img' />
      </li>
      <li className="footer_social">
        <img src="src/assets/twitter.svg" alt="twitter" className='footer_social_img' />
      </li>
    </ul>
  </footer>
  )
}

export default Footer