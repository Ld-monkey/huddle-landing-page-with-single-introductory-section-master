import Header from '../Header/Header';
import Content from '../Content/Content';
import './App.css';
import Footer from '../Footer/Footer';

function App() {
  return (
    <section>
      <div className="wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    </section>
  );
}

export default App;
