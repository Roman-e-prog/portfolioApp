import React,{useState, useEffect} from 'react';
import './dashboard.scss';
import MobileNavbar from '../../components/mobileNavbar/MobileNavbar';
import Navbar from '../../components/navbar/Navbar';
import UeberMich from '../../dashboardComponents/uebermich/UeberMich';
import Berufsstationen from '../../dashboardComponents/lebenslauf/Berufsstationen';
import Referenzen from '../../dashboardComponents/referenzen/Referenzen';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {logout} from '../../features/auth/authSlice'
const Dashboard = () => {
  const {user} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if(!user.isAdmin){
    navigate("/")
  }
     //mobile
     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

     useEffect(() => {
       const handleResize = () => setWindowWidth(window.innerWidth);
       window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, []);
   const handleLogout = ()=>{
    dispatch(logout());
    navigate("/");
   }
  return (
    <div className='dashboard-container'>
      {windowWidth <=420 ? <MobileNavbar/> : <Navbar/>}
      {user.isAdmin ? <button onClick={handleLogout} id="logout-button" type="submit">Logout</button> : null}
      <UeberMich/>
      <Berufsstationen/>
      <Referenzen/>
    </div>
  )
}

export default Dashboard
