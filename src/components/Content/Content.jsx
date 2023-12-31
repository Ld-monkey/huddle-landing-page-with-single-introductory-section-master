import illustrationMockups from '../../assets/images/illustration-mockups.svg';
import './Content.css';

function Content() {
  return (
    <section>
      <img src={illustrationMockups} alt="Illustration with mobile and dektop view" />
      <div className="content">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
          connections with your users as you engage in genuine discussion.
        </p>
        <button type="button">Register</button>
      </div>
    </section>
  );
}

export default Content;
