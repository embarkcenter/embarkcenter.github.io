import React, {useEffect, useState} from 'react';
import NavBar from './components/Navbar';
import PageHeader from './views/PageHeader';
import Services from './views/Services';
import Testimonials from './views/Testimonials';
import Contact from './views/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const el = document.querySelector(".spinner-container");
    if (el) {
      el.remove();
    }
    setLoading(false);
  }, []);
  
  useEffect(() => {
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split('#');
      if (hashParts.length >= 2) {
        const hash = hashParts.slice(-1)[0];
        var element = document.getElementById(`${hash}`);
        var headerOffset = 100;
        var elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        var offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;
  });

  
  return (
    <div>
      <NavBar />
      <PageHeader />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
