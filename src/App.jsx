import { lazy, Suspense } from 'react';
import Navbar from './sections/Navbar.jsx';

const Hero = lazy(() => import('./sections/Hero.jsx'));
const About = lazy(() => import('./sections/About.jsx'));
const Projects = lazy(() => import('./sections/Projects.jsx'));
const WorkExperience = lazy(() => import('./sections/Experience.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));
const Footer = lazy(() => import('./sections/Footer.jsx'));

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Suspense fallback={null}>
        <Hero />
        <About />
        <Projects />
        <WorkExperience />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;
