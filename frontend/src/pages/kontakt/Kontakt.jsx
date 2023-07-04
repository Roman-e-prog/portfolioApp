import React, {useState, useEffect, useRef} from 'react';
import './kontakt.scss';
import MobileNavbar from '../../components/mobileNavbar/MobileNavbar';
import Navbar from '../../components/navbar/Navbar';
import emailjs from '@emailjs/browser';
import KontaktData from '../../components/kontaktData/KontaktData';
const Kontakt = () => {
  const email = "roman.rostock@gmail.com";
  const [formdata, setFormdata] = useState({
    from_name:"",
    subject:"",
    message:""
})
const {from_name, subject, message} = formdata;
const handleChange = (e)=>{
  setFormdata((prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value,
  }))
}
     //mail
const form = useRef();
const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm( serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          console.log("message sended")
          form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
    }
    //mobile
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='kontakt-container'>
      {windowWidth <=420 ? <MobileNavbar/> : <Navbar/>}
      <div className="kontakt-title">
        <h1>Ich freue mich auf ein Gespräch mit Ihnen</h1>
      </div>
      <div className="kontakt-img-wrapper">
        <img src="./img/roman.jpg" alt="Roman Armin Rostock" title="Roman Armin Rostock"/>
      </div>
      <div className="kontakt-adress-wrapper">
        <KontaktData/>
      </div>
      <div className="h2Wrapper">
        <h2>Oder senden Sie mir direkt eine Nachricht</h2>
      </div>
      <div className="kontakt-formWrapper">
                <form id="kontaktForm" ref={form} onSubmit={sendEmail}> 
                <div className="kontakt-formGroup">
                    <label htmlFor="from_name">Ihr Name</label>
                    <input type="text" name="from_name" id="from_name" value={from_name} onChange={(e)=>handleChange(e)}/>
                </div>
                <div className="kontakt-formGroup">
                    <label htmlFor='subject'>Ihre Email</label>
                    <input type="email" name="subject" id="subject" value={subject} placeholder="Ihre Email" onChange={(e)=>handleChange(e)}/>
                </div>
                <div className="kontakt-formGroup">
                    <label htmlFor='message'>Ihre Nachricht</label>
                    <textarea cols={10} rows={10} name="message" value={message} placeholder="Ihre Nachricht" onChange={(e)=>handleChange(e)}></textarea>
                </div>
                <div className="kontakt-formGroup">
                    <label htmlFor='to_mail' style={{display:"none"}}>E-Mail</label>
                    <input type="text" name="to_mail" id="mail" defaultValue={email} title="email"/>
                </div>
                <div className="kontakt-btn-holder">
                    <button id="submit-btn" title="Absenden">Absenden</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Kontakt
