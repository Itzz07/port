// components/Layout.tsx
import { ReactNode } from 'react';
import TopNavbar from './TopNavbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div 
    className='flex h-screen bg-white dark:bg-gray-900 dark:before:fixed dark:before:-z-50 dark:before:inset-0 dark:before:bg-gray-950/50'
    // className="flex h-screen "
    >
      <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 ">
        <TopNavbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-950">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
