import React, {useState, useEffect} from 'react';
import './referenzen.scss';
import MobileNavbar from '../../components/mobileNavbar/MobileNavbar';
import Navbar from '../../components/navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {getAllReferenzen} from '../../features/referenzen/referenzenSlice';
import { mern_stack_ntv, webshop_typescript_mern } from '../../data';
const Referenzen = () => {
  const dispatch = useDispatch();
  const allReferenzen = useSelector((state)=>state.referenzen.allReferenzen);

  useEffect(()=>{
    dispatch(getAllReferenzen());
  },[dispatch])
    //mobile
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='referenzen-container'>
      {windowWidth <=420 ? <MobileNavbar/> : <Navbar/>}
      <div className="referenzen-a-title">
        <h1>Meine Projekte</h1>
      </div>
      <div className="referenzen">
        {allReferenzen.length ? allReferenzen.map((item)=>(
          <div className="referenzenFieldWrapper" key={item._id}>
            <div className="referenzen-projectTitle">{item.projectTitle}</div>
            <div className="referenzen-projectPurpose">{item.projectPurpose}</div>
            <div className="referenzen-projectDescription">{item.projectDescription}</div>
            <div className="referenzen-generalInformation">{item.generalInformation}</div>
            <div className="referenzen-structureList">
              <ul>
                {item.structureList.length ? item.structureList.map((li, index)=>(
                  <li key={index}>{li}</li>
                )):null}
              </ul>
            </div>
            <div className="referenzen-githubLink"><a href={`${item.link}`}>{item.link}</a></div>
          </div>
        )):null}
      </div>
      <div className="projekt_1_screenshots">
        <div className="screenshotTitle">
          <h2>Projekt Mern_Redux_ntv</h2>
        </div>
        <div className="screenshotWrapper">
          {mern_stack_ntv.map((item, index)=>(
            <div className="screenshotFieldWrapper" key={item.id}>
              <span>
                <img src={item.img} alt={item.alt} title={item.title} className={index === 2 ? "non-responsive" : ""}/>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="projekt_2_screenshots">
        <div className="screenshotTitle">
          <h2>Projekt Webshop_typescript_mern</h2>
        </div>
        <div className="screenshotWrapper">
          {webshop_typescript_mern.map((item)=>(
            <div className="screenshotFieldWrapper" key={item.id}>
              <span>
                <img src={item.img} alt={item.alt} title={item.title}/>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Referenzen
