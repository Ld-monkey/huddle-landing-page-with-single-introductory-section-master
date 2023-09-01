import Icons from '../Icons/Icons';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="#">
            <Icons icon="social-facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <Icons icon="twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <Icons icon="instagram" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
