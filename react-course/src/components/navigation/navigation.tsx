import { NavLink } from 'react-router-dom';
import './navigation.scss';

function HeaderNav() {
    return (
        <nav className="header__nav" role="navigation">
            <NavLink to="/" className="nav__link">
                Main
            </NavLink>
            <NavLink to="/about" className="nav__link">
                About Us
            </NavLink>
            <NavLink to="/form" className="nav__link">
                Form
            </NavLink>
            <NavLink to="/cars" className="nav__link">
                Cars
            </NavLink>
        </nav>
    );
}

export default HeaderNav;
