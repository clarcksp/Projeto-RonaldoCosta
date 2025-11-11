import Hero from './components/Hero';
import About from './components/About';
import Personal from './components/Personal';
import Business from './components/Business';
import Career from './components/Career';
import Education from './components/Education';
import Skills from './components/Skills';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Personal />
      <Business />
      <Career />
      <Education />
      <Skills />
      <Volunteer />
      <Contact />
    </div>
  );
}

export default App;
