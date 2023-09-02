import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <main>
        <div className="wrapper">
          <Header />
          <Content />
        </div>
      </main>
      <div className="wrapper">
        <Footer />
      </div>
    </>
  );
}

export default App;
