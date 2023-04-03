import './Footer.css';
import './Config.css';
import React from 'react';

const sites = {
    name: 'FrontEnd Mentor',
    link: 'https://www.frontendmentor.io?ref=challenge'
}


function Footer() {
  return (
    <div class="attribution">
    Challenge by 
    <a href={sites.link} target="_blank" rel="noreferrer">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
  )
}

export default Footer




