import './App.css';
import {Navbar , AboutUs, OurReputation, Status, FindUs, Footer, Gallery, Header, Intro, Services } from './container';


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
