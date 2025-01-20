import NavBar from './components/NavBar';
import Slideshow from './components/Slideshow';
import AboutUs from './components/AboutUs';
import LocationMap from './components/LocationMap';
import Products from './components/Products';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div>
      <NavBar />
      <Slideshow />
      <AboutUs />
      <LocationMap />
      <Products />
      <ContactForm />
    </div>
  );
};

export default App;
