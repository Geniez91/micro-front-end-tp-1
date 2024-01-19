import LocalButton from './Button';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import ContactForm from './components/ContactForm';
import NavBar from './components/NavBar';

const App = () => (
  <div>
    <NavBar />
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <Header />
    <HeroSection />
    <Features />
    <ContactForm />
  </div>
);

export default App;
