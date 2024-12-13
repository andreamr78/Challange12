import React from 'react';
import { Link } from 'react-router-dom';
import linkedInIcon from '../assets/social-media.svg';
import twitterIcon from '../assets/twitter-icon.png'
import '../styles/footerStyles.css'

function Footer() {
  return (
    <div className='main-container'>
      <Link to="https://github.com/andreamr78">
        <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" />
      </Link>

      <Link to="https://www.linkedin.com/in/andrea-rodriguez-8b639b113/">
        <img src={linkedInIcon} />
      </Link>

      <Link to="https://twitter.com">
        <img src={twitterIcon} />
      </Link>
    </div>
  )
}

export default Footer