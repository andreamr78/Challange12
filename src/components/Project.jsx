import React from 'react';
import { Link } from 'react-router-dom';

function Project({link, gif, name}) {
  return (
    <div className='project-cont'>
        <Link to={link}>
            <img src={gif} className='gif'/>
            <div className='overlay-box'>
              <p className='link-name'>{name}</p>
              <img className='giticon' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
            </div>
        </Link>
    </div>
  )
}

export default Project