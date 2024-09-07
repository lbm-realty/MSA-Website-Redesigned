import '../css/navbar.css'
import logo from '../images/msa-logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div>
        <div id="navbar" className="navbar">
          <img src={logo} className="logo" /><Link to='/'></Link>
          <ul id="menuList">
            <li className="navbar-text"><Link to='/'>Home</Link></li>
            <li className="navbar-text"><Link to='/faqs'>FAQS</Link></li>
            <li className="navbar-text"><Link to='/donations'>NEWSLETTER</Link></li>
            <li className="navbar-text"><Link to='/newsletter'>DONATIONS</Link></li>
            <li className="navbar-text"><Link to='/events'>EVENTS</Link></li>
          </ul>
          <div id="menu-icon" className="menu-icon">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    );
}

export default Navbar;