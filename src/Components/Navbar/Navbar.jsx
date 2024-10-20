import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ({ onCreateClick }) => { // Accept onCreateClick prop
  return (
    <div className='nav'>
      <div className="nav-logo">
        <img src={logo} alt="Tripbooks Logo" className="logo-image" />
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Order</li>
        <li>About</li>
        <li className='nav-contact' onClick={onCreateClick}> {/* Use the prop to open modal */}
          Create
        </li>
        <li>Track</li>
        <li>Contact</li>
        <li>Offers</li>
      </ul>
    </div>
  );
};

export default Navbar;
