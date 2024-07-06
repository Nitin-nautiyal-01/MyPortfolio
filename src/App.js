import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Mywork from './Components/Mywork/Mywork';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <About/>
    <Education/>
    <Mywork/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
