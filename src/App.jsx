import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <Services />
      <Testimonials />
      <ContactCTA />
    </div>
  );
}

export default App;
