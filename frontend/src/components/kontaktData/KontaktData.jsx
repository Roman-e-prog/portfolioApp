import React from 'react'
import './kontaktData.scss';
const KontaktData = () => {
  return (
    <div className='kontaktDataWrapper'>
      <div className="kontaktTitleWrapper">
        <h2>Meine Kontaktdaten</h2>
      </div>
      <ul className="kontaktData">
        <li>Ludwigstraße 47</li>
        <li>59846 Sundern</li>
        <li>0170/3285419</li>
        <li>roman.rostock@gmail.com</li>
      </ul>
    </div>
  )
}

export default KontaktData
