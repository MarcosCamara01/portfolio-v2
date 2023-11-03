import { useTranslation } from 'react-i18next';
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
import { useEffect, useState } from 'react';

function App() {

  const { t, i18n } = useTranslation("global");
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const languageChanged = (newLanguage) => {
      setCurrentLanguage(newLanguage);
    };

    i18n.on('languageChanged', languageChanged);

    return () => {
      i18n.off('languageChanged', languageChanged);
    };
  }, [i18n]);

  const updateHeadContent = () => {
    document.title = t('title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('description'));
    }
  };

  useEffect(() => {
    updateHeadContent();
  }, [currentLanguage]);

  return (
    <>
      {/* Navegación Y Contacto */}
      <Navbar />
      <SocialMedia />
      <EmailContact />

      {/* CONTENIDO CENTRAL */}
      <main>
        <Home />
        <Projects />
        <OtherProjects />
        <VerticalTabs />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App
