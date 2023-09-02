import Icons from '../Icons/Icons';
import './Footer.css';

function Footer() {
  return (
    <footer role="contentinfo">
      <ul>
        <li>
          <a href="https://www.facebook.com/" aria-label="Link to Facebook">
            <Icons icon="social-facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" aria-label="Link to Twitter">
            <Icons icon="twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" aria-label="Link to instagram">
            <Icons icon="instagram" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
