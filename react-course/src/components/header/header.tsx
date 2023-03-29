import React from 'react';
import Logo from '../../assets/Initial_D.png';
import HeaderNav from '../navigation/navigation';
import './header.scss';

class Header extends React.Component {
    render(): React.ReactNode {
        return (
            <header className="header">
                <img className="header__logo" src={Logo} alt="logo" />
                <HeaderNav />
            </header>
        );
    }
}

export default Header;
