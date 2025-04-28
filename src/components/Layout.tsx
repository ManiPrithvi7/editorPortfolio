
import { useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 gap-7">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onNavigate={closeSidebar} />

        {/* Main content */}
        <div className="flex-1 transition-all duration-300 overflow-auto px-8">
          <button
            onClick={toggleSidebar}
            className={`fixed top-4 left-4 z-50 p-2 bg-vscode-sidebar-active rounded hover:bg-vscode-sidebar hover:text-vscode-accent transition-colors md:hidden ${
              sidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className="mt-12 md:mt-0 max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
