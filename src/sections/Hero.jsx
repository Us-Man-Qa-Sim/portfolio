import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import ErrorBoundary from '../components/ErrorBoundary.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <div className="flex items-center justify-center gap-4 mb-4">
          <img
            src="/assets/usman-logo.webp"
            alt="Usman Qasim"
            className="w-16 h-16 rounded-full border-2 border-white/20"
          />
        </div>
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Usman Qasim<span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Full Stack Engineer & Problem Solver</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {isMobile ? (
          <div className="w-full h-full bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex flex-col items-center justify-center px-6 gap-6">
            {/* Decorative tech card */}
            <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-white/40 text-xs font-mono">portfolio.js</span>
              </div>
              <div className="font-mono text-sm leading-relaxed">
                <p className="text-blue-400">const <span className="text-white">developer</span> = {'{'}</p>
                <p className="pl-4 text-green-400">&nbsp;&nbsp;name: <span className="text-yellow-300">&quot;Usman Qasim&quot;</span>,</p>
                <p className="pl-4 text-green-400">&nbsp;&nbsp;title: <span className="text-yellow-300">&quot;Full Stack Engineer&quot;</span>,</p>
                <p className="pl-4 text-green-400">&nbsp;&nbsp;experience: <span className="text-orange-300">5</span>,</p>
                <p className="pl-4 text-green-400">&nbsp;&nbsp;stack: <span className="text-blue-300">[&quot;MERN&quot;, &quot;MEAN&quot;]</span>,</p>
                <p className="pl-4 text-green-400">&nbsp;&nbsp;available: <span className="text-purple-300">true</span></p>
                <p className="text-blue-400">{'}'}</p>
              </div>
            </div>
            {/* Tech stack badges */}
            <div className="flex flex-wrap justify-center gap-2">
              {['React', 'Next.js', 'Angular', 'ExpressJS', 'NestJS', 'MongoDB', 'PostgreSQL', 'SQL'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <ErrorBoundary>
            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>
                {/* To hide controller */}
                <Leva hidden />
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                <HeroCamera isMobile={isMobile}>
                  <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
                </HeroCamera>

                <group>
                  <Target position={sizes.targetPosition} />
                  <ReactLogo position={sizes.reactLogoPosition} />
                  <Rings position={sizes.ringPosition} />
                  <Cube position={sizes.cubePosition} />
                </group>

                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
              </Suspense>
            </Canvas>
          </ErrorBoundary>
        )}
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
