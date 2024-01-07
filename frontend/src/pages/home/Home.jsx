import React, {useEffect, useState} from 'react'
import './home.scss';
import Navbar from '../../components/navbar/Navbar';
import Bild from '../../components/meinBild/Bild';
import Titel from '../../components/titel/Titel';
import MobileNavbar from '../../components/mobileNavbar/MobileNavbar';
const Home = () => {
        //mobile
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        useEffect(() => {
          const handleResize = () => setWindowWidth(window.innerWidth);
          window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
  return (
    <div className='homepage'>
      {windowWidth <= 700 ? <MobileNavbar/>: <Navbar/> }
      <div className="contentWrapper">
          <Bild/>
          <Titel/>
      </div>
    </div>
  )
}

export default Home
