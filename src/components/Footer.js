import React from 'react'
import {FaInstagram, FaLinkedin, FaGithub, FaWhatsapp} from 'react-icons/fa'
import './Footer.css'
export default function Footer() {
  return (
    <footer className='footer'>
      <a
        className="footer-links"
        href="https://instagram.com/"
        target="_blank"
      ><FaInstagram style={{color: 'white'}} className='footer-icon'/></a>
      
      <a
        className="footer--links"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      ><FaGithub style={{color: 'white'}} className='footer-icon'/></a>
      
      <a
        className="footer-links"
        href="https://linkedin.com/"
        target="_blank"
      ><FaLinkedin style={{color: 'white'}} className='footer-icon'/></a>
      
      <a
        className="footer-links"
        href="https://whatsapp.com/"
        target="_blank"
      ><FaWhatsapp style={{color: 'white'}} className='footer-icon'/></a>
        
        
    </footer>
  )
}
