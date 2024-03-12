import { useEffect, useState } from 'react';
import './App.css';
import { Navbar, AboutUs, OurReputation, Status, FindUs, Footer, Gallery, Header, Intro, Services } from './container';
import { Preloader } from './preloader/Preloader';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g., fetching data)
    setTimeout(() => {
      setLoading(false); // Set loading to false when the operation is done
    }, 2000);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : 
      <div>
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
      </div>
      }
    </>
  );
}

export default App;
