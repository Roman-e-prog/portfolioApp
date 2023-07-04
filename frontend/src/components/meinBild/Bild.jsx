import React from 'react'
import './bild.scss';
import {useNavigate} from 'react-router-dom';
const Bild = () => {
  const navigate = useNavigate();
  const handleClick = event => {
    if (event.detail === 2) {
      navigate("/login")
    } 
  };
  return (
    <div className='bild-container'>
      <div className="imgWrapper">
        <div className="img" onClick={handleClick}>
            <img src="./img/roman.png" alt="Roman Armin Rostock" title="Roman Armin Rostock"/>
        </div>
      </div>
    </div>
  )
}

export default Bild
