import { Link } from 'react-router-dom';
import './NavBar.style.scss';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src="./assets/images/logo.png" alt="logo" />
      </Link>
      <Link to="/"> Rockets </Link>
      <Link to="/missions"> Missions </Link>
      <Link to="/profile"> My Profile </Link>
    </nav>
  );
};

export default NavBar;
