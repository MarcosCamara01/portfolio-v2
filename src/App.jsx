import './App.css'
import { EmailContact } from './components/common/EmailContact';
import { Footer } from './components/common/Footer';
import { Navbar } from './components/common/Navbar';
import { SocialMedia } from './components/common/SocialMedia';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { OtherProjects } from './components/OtherProjects';
import { Projects } from './components/Projects';
import VerticalTabs from './components/VerticalTabs';

function App() {
  return (
    <>
      {/* Navegación Y Contacto */}
      <Navbar />
      <SocialMedia />
      <EmailContact />

      {/* CONTENIDO CENTRAL */}
      <main>
        <Home />
        <VerticalTabs />
        <Projects />
        <OtherProjects />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App
