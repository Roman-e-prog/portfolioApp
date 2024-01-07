import React,{useState, useEffect} from 'react';
import './uebermich.scss';
import MobileNavbar from '../../components/mobileNavbar/MobileNavbar'
import Navbar from '../../components/navbar/Navbar'
import {useDispatch, useSelector} from 'react-redux';
import {getAllUeberMich} from '../../features/ueberMich/ueberMichSlice';
import KontaktData from '../../components/kontaktData/KontaktData';
const Uebermich = () => {
  const dispatch = useDispatch();
  const ueberMich = useSelector((state)=>state.ueberMich.allUeberMich);
  useEffect(()=>{
    dispatch(getAllUeberMich())
  },[dispatch])
    //mobile
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div id='ueberMich-ausgabe-container'>
      {windowWidth <=700 ? <MobileNavbar/> : <Navbar/>}
      <div className="ueberMich-a-contentWrapper">
        <div id="ueberMich-b-contentWrapper">
          <div className="imageWrapper">
            <img src="./img/roman.jpg" alt="Roman Armin Rostock" title="Roman Armin Rostock"/>
          </div>
          <div className="contactWrapper">
            <KontaktData/>
          </div>
        </div>
        <div id="contentData">
          {ueberMich.length ? ueberMich.map((item)=>(
            <div className="anschreiben" key={item._id}>
              <span>{item.content}</span>
            </div>
          )):null}
        </div>
      </div>
    </div>
  )
}

export default Uebermich
