import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Intro from '../components/Intro'

function Home () {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Intro">
        <Intro />
      </div>
    </div>
  );
}

export default Home;