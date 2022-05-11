import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';
import './NavBar.style.scss';

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <NavLink to="/" className="navbar-brand">
        <img src={logoImage} alt="logo" />
        <p>Space Travelers&apos; Hub</p>
      </NavLink>
      <div className="navbar-NavLinks">
        <NavLink to="/"> Rockets </NavLink>
        <NavLink to="/missions"> Missions </NavLink>
        <p>|</p>
        <NavLink to="/profile"> My Profile </NavLink>
      </div>
    </div>
  </nav>
);

export default NavBar;
