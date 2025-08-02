import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('usmanqasim0900@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="w-full sm:h-[276px] h-[200px] relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800"></div>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full animate-pulse"></div>
                <div
                  className="absolute top-12 right-8 w-4 h-4 bg-blue-200 rounded-full animate-bounce"
                  style={{ animationDelay: '0.5s' }}></div>
                <div
                  className="absolute bottom-8 left-8 w-6 h-6 bg-purple-200 rounded-full animate-ping"
                  style={{ animationDelay: '1s' }}></div>
                <div
                  className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-full animate-spin"
                  style={{ animationDuration: '3s' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>

            <div>
              <p className="grid-headtext">Hi, I&apos;m Muhammad Usman</p>
              <p className="grid-subtext">
                With 5 years of experience in MERN and MEAN stacks, I specialize in building scalable, high-performance
                web applications using modern technologies like Next.js, React, Angular, NestJS, and microservices.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="w-full sm:h-[276px] h-[200px] relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600"></div>
              <div className="absolute inset-0 opacity-30">
                <div className="grid grid-cols-6 gap-2 p-4 h-full">
                  <div className="bg-white rounded animate-pulse" style={{ animationDelay: '0s' }}></div>
                  <div className="bg-blue-200 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="bg-purple-200 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  <div className="bg-cyan-200 rounded animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <div className="bg-white rounded animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                  <div className="bg-blue-200 rounded animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <div className="text-4xl mb-2">⚛️</div>
                <div className="text-2xl">💻</div>
              </div>
            </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in MERN & MEAN stacks with expertise in React, Angular, Next.js, NestJS, Node.js, MongoDB,
                PostgreSQL, TypeScript, and modern development tools.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 31.5204, lng: 74.3587, text: 'Lahore, Pakistan', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I&apos;m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Lahore, Pakistan and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div className="w-full sm:h-[266px] h-[200px] relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600"></div>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 text-white text-lg font-mono animate-pulse">&lt;code&gt;</div>
                <div
                  className="absolute top-8 left-12 text-white text-sm font-mono animate-pulse"
                  style={{ animationDelay: '0.5s' }}>
                  function build() {'{}'}
                </div>
                <div
                  className="absolute top-12 left-16 text-white text-sm font-mono animate-pulse"
                  style={{ animationDelay: '1s' }}>
                  return innovation;
                </div>
                <div
                  className="absolute bottom-8 right-8 text-white text-lg font-mono animate-pulse"
                  style={{ animationDelay: '1.5s' }}>
                  &lt;/code&gt;
                </div>
                <div
                  className="absolute top-16 right-4 w-16 h-16 border-2 border-white rounded-lg animate-bounce"
                  style={{ animationDelay: '2s' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl animate-pulse">💡</div>
              </div>
            </div>

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving complex problems and building scalable solutions through code. Programming is my passion,
                and I enjoy exploring new technologies, implementing clean architecture, and optimizing performance.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="w-full md:h-[126px] sm:h-[276px] h-[150px] relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"></div>
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-2 left-2 w-4 h-4 bg-white rounded-full animate-ping"></div>
                <div
                  className="absolute top-2 right-2 w-4 h-4 bg-yellow-200 rounded-full animate-ping"
                  style={{ animationDelay: '0.5s' }}></div>
                <div
                  className="absolute bottom-2 left-2 w-4 h-4 bg-pink-200 rounded-full animate-ping"
                  style={{ animationDelay: '1s' }}></div>
                <div
                  className="absolute bottom-2 right-2 w-4 h-4 bg-white rounded-full animate-ping"
                  style={{ animationDelay: '1.5s' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl animate-bounce">📧</div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  usmanqasim0900@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
