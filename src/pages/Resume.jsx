import React from 'react';
import Button from 'react-bootstrap/Button';
import cvFile from '../assets/cv-ing.pdf';

function Resume() {

  function downloadOnClick(){
    fetch(cvFile).then((res) => {
      res.blob().then((blob) => {
       const fileURL= window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = cvFile;
        alink.click();
      })
    })
  }
  return (
    <div className='resume-container'>
       <Button variant="primary" onClick={downloadOnClick}>Download Resume PDF</Button>
       <h3>Front end Technologies</h3>
       <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React</li>
          <li>Sass</li>
          <li>Angular</li>
        </ul>
        <h3>Back end Technologies</h3>
        <ul>
          <li>Nodejs</li>
          <li>API management</li>
          <li>SQL</li>
        </ul>
    </div>
  )
}

export default Resume