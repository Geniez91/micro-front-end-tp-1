import LocalButton from './Button';

const App = () => (
  <div>
    <div id='nav' style={{ zIndex: '1', marginBottom: '16px' }}>
      <nav style={{ background: '#0d6efd', width: '100%', height: 'auto', position: 'fixed', top: '0', left: '0'}}>
        landing page
      </nav>
    </div>

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
