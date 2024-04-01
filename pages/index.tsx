// pages/index.tsx
import Layout from '../components/Layout';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animated, useSpring } from 'react-spring';

const Home: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    'A FRONTEND DEVELOPER',
    'A BACKEND DEVELOPER',
    'A UX/UI DESIGNER',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const fade = useSpring({
    // Define the animation
    from: { opacity: 0 },
    to: { opacity: 1 },
    // Add a delay of 0.5 seconds
    delay: 0.5
  });
  
  return (
    <Layout>
      {/* new code  */}
      <div className="grid grid-cols-2 items-center justify-center h-screen p-4">
        <div className="flex flex-col items-center justify-center  p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-zinc-600">
              Hello, I&apos;m{" Joel K. Zimba"}
            </span>
            <animated.h1
              style={fade}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-3xl md:text-4xl lg:text-5xl text-center font-extrabold m-4 "
            >
              {texts[textIndex]}
            </animated.h1>
          </h1>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/contact" className="bg-purple-500 text-white px-4 py-2 rounded block w-full md:inline-block md:w-auto hover:bg-purple-600">
                Contact Me
            </Link>
            <Link href="/projects" className="bg-indigo-500 text-white px-4 py-2 rounded block w-full md:inline-block md:w-auto hover:bg-indigo-600">
                Projects
            </Link>
          </div>
        </div>

        <div>
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>


      {/* old code  */}
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>
        
      </div>

      
    
    </Layout>
  );
};

export default Home;
