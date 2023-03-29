import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

class HeaderNav extends React.Component {
    render(): React.ReactNode {
        return (
            <nav className="header__nav">
                <Link to="/" className="nav__link">
                    Main
                </Link>
                <Link to="/about" className="nav__link">
                    About Us
                </Link>
                <Link to="/form" className="nav__link">
                    Form
                </Link>
            </nav>
        );
    }
}

export default HeaderNav;
