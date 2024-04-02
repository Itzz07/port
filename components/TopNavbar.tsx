// components/TopNavbar.tsx
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaMailBulk, FaMailchimp, FaVoicemail } from 'react-icons/fa';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const TopNavbar: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { text: 'Home', href: '/' },
    { text: 'About Me', href: '/about' },
    { text: 'Work Experience', href: '/experience' },
    { text: 'Recent Projects', href: '/projects' },
    { text: 'References', href: '/references' },
    { text: 'Contact Me', href: '/contact' },
    // { text: 'ACHIEVE', href: '/achievementsSection' },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav 
      className='fixed overflow-hidden z-20 w-full bg-white/80 dark:bg-gray-950/0 dark:shadow-md rounded-b-lg dark:shadow-gray-950/10 border-gray-200 border-[--ui-light-border-color]  dark:border-[--ui-dark-border-color] backdrop-blur-2xl'
      // className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="https://flowbite.com"  className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center text-xl font-bold whitespace-nowrap dark:text-orange-500">Itzz</span>

          </Link>
          <div className="flex items-center lg:order-2">
            <button onClick={handleMenuToggle} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded={isMenuOpen}>
              <span className="sr-only">Open main menu</span>
              <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg className={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navigationLinks.map((link) => (
                <li key={link.text}>
                  <Link href={link.href}  className={`block py-2 pr-4 pl-3 text-sm ${router.pathname === link.href ? 'text-orange-500 rounded border-b border-gray-400' : 'text-orange-400  hover:bg-zinc-600'}`}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      
          {/* <div className=" flex max-w-7xl items-center justify-evenly p-2 lg:px-8" aria-label="Global"> */}
      {/* Your social links */}
      {/* <Link href="https://github.com/Itzz07/" passHref target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FaGithub />
       
      </Link>
      <Link href="https://twitter.com/rio_itzz" passHref target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FaTwitter />
      </Link>
      <Link href="https://www.linkedin.com/in/joel-zimba-5325a8293/" passHref  target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FaLinkedin />
      </Link>
      <Link href="mailto:zimbajoel1@gmail.com" passHref className="text-white mx-2">
            <FaMailBulk />
        </Link> */} 

    
        {/* </div>
       */}
    </nav>
  </header>

    
  );
};

export default TopNavbar;
