import React, {useState} from 'react'
import './mobileNavbar.scss';
import { links } from '../../data';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'
const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = ()=>{
        if(isOpen){
            setIsOpen(false)
        }
        else{
            setIsOpen(true)
        }
    }
  return (
    <div className='mobileNav-container'>
        <nav className="mobileNav">
            <div className="mobileName"><Link to="/" className="link"><span>Roman Armin Rostock</span></Link></div>
            <hr className="mobileBorder"/>
            <div className="mobileMenue">
                <GiHamburgerMenu onClick={handleClick} id="hamburger"/>
                <div className="hamburgermenue">
                    {isOpen ? <div className="dropdown">
                    <ul className='mobileLinkListe'>
                    {links.map((item)=>(
                        <li key={item.id}><Link to={{pathname:`/${item.name.replace(/\s+/g,'').replace(/Ü/g, 'ue')}`}} className='link'>{item.name}</Link></li>
                    ))}
                </ul>
                    </div>:null
                    }
                </div>
            </div>
        </nav>
    </div>
  )
}

export default MobileNavbar

