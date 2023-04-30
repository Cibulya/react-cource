import Logo from '../../assets/Initial_D.png';
import HeaderNav from '../navigation/navigation';
import './header.scss';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="logo" />
            <HeaderNav />
        </header>
    );
}

export default Header;
