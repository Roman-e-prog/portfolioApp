import React from 'react'
import './navbar.scss';
import { links } from '../../data';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav className="nav">
            <div className="name"><Link to="/" className="link"><span>Roman Armin Rostock</span></Link></div>
            <hr className="border"/>
            <div className="menue">
            <ul className='linkListe'>
                {links.map((item)=>(
                    <li key={item.id}>
                        <Link to={{pathname:`/${item.name.replace(/\s+/g,'').replace(/Ü/g, 'ue')}`}} className='link'>
                            {item.name}
                        </Link>
                    </li>
                ))}
</ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
