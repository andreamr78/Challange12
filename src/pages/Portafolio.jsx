import React from 'react';
import Project from '../components/Project';

let dataArray = 
[
  {
    gif: 'https://media.tenor.com/-O9-HcdZgzUAAAAM/stan-twitter-flolikenic.gif',
    link: 'https://github.com/andreamr78/challange10',
    name: 'Challenge 10'
  },
  {
    gif: 'https://media1.tenor.com/m/hA2VAmjEyd4AAAAd/we-love.gif',
    link: 'https://github.com/andreamr78/challange9',
    name: 'Challenge 9'
  },
  {
    gif: 'https://media.tenor.com/9lMv9Efi7-4AAAAM/stan-twitter-adele-instagram-live.gif',
    link:  'https://github.com/andreamr78/Challenge8',
    name: 'Challenge 8'
  },
  {
    gif: 'https://64.media.tumblr.com/29beb91b0eebee8e4479cf2b20722e09/9e52c96df0163383-44/s250x400/83c49e72c4f54af5ec35cf1aa94afa37f6678802.gif',
    link: 'https://github.com/andreamr78/challange7',
    name: 'Challenge 7'
  },
  {
    gif: 'https://media.tenor.com/EL2SpsM8nwQAAAAM/bellephobic-trisha-paytas-memes.gif',
    link: 'https://github.com/andreamr78/donatello',
    name: 'Project 1'
  },
  {
    gif: 'https://media.tenor.com/lEbpWKXtuPgAAAAd/stan-twitter-halebskisses.gif',
    link:  'https://github.com/andreamr78/pre-work-study-guide',
    name: 'Study Guide'
  },
]

function Portafolio() {
  return (
    <div className='portafolio-container'>
      {dataArray.map((el) => {
        return(
          <Project link={el.link} gif={el.gif} name={el.name}/>
        )
      })}
    </div>
  )
}

export default Portafolio