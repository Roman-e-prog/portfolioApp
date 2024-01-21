import React, {useState, useEffect} from 'react';
import './lebenslauf.scss';
import MobileNavbar from '../../components/mobileNavbar/MobileNavbar';
import Navbar from '../../components/navbar/Navbar';
import {useDispatch, useSelector} from 'react-redux';
import { getAllBerufsstationen } from '../../features/berufsstationen/berufsstationenSlice';
import Spinner from '../../components/spinner/Spinner';
const Lebenslauf = () => {
  const dispatch = useDispatch();
  const allBerufsstationen = useSelector((state)=>state.berufsstationen.allBerufsstationen);
  const isLoading = useSelector((state)=>state.berufsstationen.isLoading);

  useEffect(()=>{
    dispatch(getAllBerufsstationen());
  },[dispatch])
    //mobile
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const sortedBerufsstationen = allBerufsstationen.sort((a,b)=>a.createdAt > b.createdAt ? 1 : -1);
  if(isLoading){
    return <Spinner/>
  }
  return (
    <div className="lebenslauf-container">
      {windowWidth <= 700 ? <MobileNavbar/> : <Navbar/>}
      <div className="lebenslauf-title">
        <h1>Lebenslauf</h1>
      </div>
        <div className="timeline">
          {sortedBerufsstationen.length ? sortedBerufsstationen.map((item)=>(
            <div className="lebenslauf-fieldWrapper" key={item._id}>
             <div className="date">
              <span>{item.entry}</span>
              <span> - </span>
              <span>{item.close}</span></div>
             <div className="station-wrapper">
              <div className="station-headline">{item.textBold}</div>
              <div className="station-beschreibung">{item.textNormal}</div>
             </div>
             
              <div className="berufstationen-content"></div>
              
            </div>
          )):null}
        </div>
    </div>
  )
}

export default Lebenslauf
