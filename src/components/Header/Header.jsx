import logo from '../../assets/images/logo.svg';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
    </header>
  );
}

export default Header;
