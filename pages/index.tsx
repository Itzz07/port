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
    'A MOBILE DEVELOPER',
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
      <div className="mx-auto pt-36 px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center justify-center p-4">
        {/* Image */}
        <div className="md:order-first flex items-center justify-center p-4">
          <div className="shadow-2xl shadow-orange-600 rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/person-1.png"
              alt="hero image"
              className="absolute  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Text */}
        <div className="md:order-2 flex flex-col items-center justify-center p-4">
          <div className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-orange-600">
              Hello, I&apos;m Joel K. Zimba
            </span>
            <animated.h1
              style={fade}
              className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-orange-500 text-6xl md:text-5xl lg:text-7xl text-center font-extrabold m-4 "
            >
              {texts[textIndex]}
            </animated.h1>
          </div>
          <div className="space-y-4 space-x-4">
            <Link
              href="/contact"
              className="bg-orange-500 text-white px-4 py-2 rounded-3xl  w-full  md:w-auto hover:bg-orange-600 hover:shadow-zinc-600 shadow-md "
            >
              Contact Me
            </Link>
            <Link
              href="/projects"
              className="bg-zinc-500 text-white px-4 py-2 rounded-3xl  w-full  md:w-auto hover:bg-zinc-600  hover:shadow-orange-600 shadow-md "
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
