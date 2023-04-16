import { Link } from 'react-router-dom';
import './navigation.scss';

function HeaderNav() {
    return (
        <nav className="header__nav" role="navigation">
            <Link to="/" className="nav__link">
                Main
            </Link>
            <Link to="/about" className="nav__link">
                About Us
            </Link>
            <Link to="/form" className="nav__link">
                Form
            </Link>
            <Link to="/cars" className="nav__link">
                Cars
            </Link>
        </nav>
    );
}

export default HeaderNav;
