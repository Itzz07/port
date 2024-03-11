// components/Layout.tsx
import { ReactNode } from 'react';
import TopNavbar from './TopNavbar';
import SideNavbar from './SideNavbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <div className="hidden lg:flex flex-col w-200 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4">
        <SideNavbar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 ">
        <TopNavbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-700">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
