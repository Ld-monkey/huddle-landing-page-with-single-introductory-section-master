import logo from '../../assets/images/logo.svg';
import illustrationMockups from '../../assets/images/illustration-mockups.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';

function App() {
  return (
    <section>
      <header className="logo">
        <img src={logo} alt="Logo" />
      </header>
      <div className="wrapper">
        <img src={illustrationMockups} alt="Illustration with mobile and dektop view" />
        <div className="content">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
            connections with your users as you engage in genuine discussion.
          </p>
          <button type="button">Register</button>
        </div>
      </div>
      <footer>
        <ul>
          <li>
            <a href="#">
              <img src={facebookIcon} alt="Facebook icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagramIcon} alt="Instagram Icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="Twitter Icon" />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default App;
