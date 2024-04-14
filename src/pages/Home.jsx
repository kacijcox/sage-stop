import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from '../components/Intro'
import FrequentlyPurchased from '../components/FrequentlyPurchased';
import Banner from '../components/Banner';
import Banner1 from '../img/banner/banner1.jpg';
import Footer from '../components/Footer';

function Home () {
  return (
    <div className="App">
      <div className="Intro">
        <Intro />
      </div>
      <div className="Intro">
        <FrequentlyPurchased />
      </div>
      <Banner 
      title="Create a space that's right for you"
      text="All incense and herbs are ethically grown & harvested"
      img={Banner1}
      />
      <Footer />
    </div>
  );
}

export default Home;