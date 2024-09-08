import { useEffect, useState } from 'react';
import '../css/navbar.css'
import logo from '../images/msa-logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 600);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [])

  function toggleClick() {
    setMenuOpen(!menuOpen);
  }

  return (
      <div>
        <div id="navbar" className="navbar">
          <img src={logo} className="logo" /><Link to='/'></Link>
          <ul id="menuList" className={`menuList-${menuOpen ? 'open' : 'closed'}`}>
            <li className="navbar-text"><Link to='/'>Home</Link></li>
            <li className="navbar-text"><Link to='/faqs'>FAQS</Link></li>
            <li className="navbar-text"><Link to='/newsletter'>NEWSLETTER</Link></li>
            <li className="navbar-text"><Link to='/donations'>DONATE</Link></li>
            <li className="navbar-text"><Link to='/events'>EVENTS</Link></li>
          </ul>
          {isMobile && (
           <div id="menu-icon" onClick={toggleClick} className='menu-icon'>
            <i className="fa-solid fa-bars"></i>
          </div> 
          )} 
        </div>
      </div>
    );
}

export default Navbar;