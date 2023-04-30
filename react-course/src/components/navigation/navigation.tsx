import { Link } from 'react-router-dom';
import './navigation.scss';

function HeaderNav() {
    return (
        <nav className="header__nav">
            <Link to="/" className="nav__link">
                Main
            </Link>
            <Link data-cy="about" to="/about" className="nav__link">
                About Us
            </Link>
            <Link data-cy="form" to="/form" className="nav__link">
                Form
            </Link>
            <Link to="/cars" className="nav__link">
                Cars
            </Link>
            <Link to="/sfx" className="nav__link">
                Dont click on me!
            </Link>
        </nav>
    );
}

export default HeaderNav;
