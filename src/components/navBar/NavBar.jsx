import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';
import './NavBar.style.scss';

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-brand">
        <img src={logoImage} alt="logo" />
        <p>Space Travelers&apos; Hub</p>
      </Link>
      <div className="navbar-links">
        <Link to="/"> Rockets </Link>
        <Link to="/missions"> Missions </Link>
        <p>|</p>
        <Link to="/profile"> My Profile </Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
