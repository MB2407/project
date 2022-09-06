import React from 'react'
import mann from '../assets/mann.JPG'
import './Info.css'
import {FaEnvelope, FaTwitter} from 'react-icons/fa'
export default function Info () {
  return (
    <div>
    <img className='imgg' src={mann} alt="Mann Bajpai" />
    <h1 className='name'>Mann Bajpai</h1>
    <h2 className='profile'>Software Developer</h2>
    <a
        className="info--website"
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <p className="info--website__text">mannbajpai.com</p>
      </a>
      <div className="info--connect">
        <a
          className="info--connect__email"
          href="mailto:mann.archna@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>
        <a
          className="info--connect__linkedin"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter/>
          <span>Twitter</span>
        </a>
      </div>
    
    </div>
  )
}
