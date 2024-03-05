import './App.css';
import { AboutUs, OurReputation, Status, FindUs, Footer, Gallery, Header, Intro, Services } from './container';
import { Navbar } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <OurReputation />
      <AboutUs />
      <Services />
      <Status />
      <Intro />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
}

export default App;
