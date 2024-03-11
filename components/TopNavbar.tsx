// components/TopNavbar.tsx
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaMailBulk, FaMailchimp, FaVoicemail } from 'react-icons/fa';
import { useRouter } from 'next/router';
import React from 'react';

const TopNavbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-purple-800 flex justify-evenly p-2 ">
      {/* Your social links */}
      <Link href="https://github.com/Itzz07/" passHref target="_blank" rel="noopener noreferrer" className="text-white mx-2">
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
        </Link>

    </div>
  );
};

export default TopNavbar;
