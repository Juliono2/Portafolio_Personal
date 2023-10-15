import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Portafolio from './components/Portafolio/Portafolio';
import HabilitiesHome from './components/HabilitiesHome/HabilitiesHome'
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Portafolio />
      <HabilitiesHome />
      <Contact />
    </div>
  );
}

export default App;
