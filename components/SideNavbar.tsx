// components/SideNavbar.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const SideNavbar: React.FC = () => {
  const router = useRouter();

  const navigationLinks = [
    { text: 'Home', href: '/' },
    { text: 'About Me', href: './about' },
    { text: 'Work Experience', href: './experience' },
    { text: 'Recent Projects', href: './projects' },
    { text: 'References', href: './references' },
    { text: 'Contact Me', href: './contact' },
    { text: 'ACHIEVE', href: './achievementsSection' },
  ];

  return (
    <nav>
      <ul>
        {navigationLinks.map((link) => (
          <li key={link.text}>
            
            <Link href={link.href}>
              {/* Remove the <a> tag */}
              <div className={`text-white p-2 cursor-pointer ${router.pathname === link.href ? 'bg-pink-300' : ''}`}>
                {link.text}
              </div>
            </Link>

          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavbar;
