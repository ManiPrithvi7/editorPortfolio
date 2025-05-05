import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Code, FolderOpen, Mail, X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onNavigate: () => void;
}

const Sidebar = ({ isOpen, onNavigate }: SidebarProps) => {
  const [isExtended, setIsExtended] = useState(true);
  const navItems = [
    {
      path: "/",
      icon: <Home size={20} />,
      label: "Home",
      fileName: "myIntro.jsx",
    },
    {
      path: "/about",
      icon: <User size={20} />,
      label: "About",
      fileName: "about.jsx",
    },
    {
      path: "/skills",
      icon: <Code size={20} />,
      label: "Skills",
      fileName: "skills.jsx",
    },
    {
      path: "/projects",
      icon: <FolderOpen size={20} />,
      label: "Projects",
      fileName: "projects.jsx",
    },
    {
      path: "/contact",
      icon: <Mail size={20} />,
      label: "Contact",
      fileName: "contact.jsx",
    },
  ];

  return (
    <aside
      className={`fixed bg-vscode-sidebar  inset-y-0 left-0 z-40 transform transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        ${isExtended ? "w-55" : "w-15"}
        md:relative
      `}
      onMouseEnter={() => setIsExtended(true)}
      onMouseLeave={() => !isOpen && setIsExtended(false)}
    >
      <div className="h-full flex flex-col">
        {/* Mobile close button */}
        <button
          onClick={onNavigate}
          className="md:hidden absolute top-4 right-4 p-2 hover:bg-vscode-sidebar-active rounded-md transition-colors"
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>

        {/* Explorer header */}
        {/* <div className="px-4 h-12 flex items-center border-b border-vscode-sidebar-active">
          <span className={`text-sm uppercase font-medium transition-opacity duration-200 ${
            !isExtended && "md:opacity-0"
          }`}>
            Explorer
          </span>
        </div> */}

        {/* Project name */}
        <div className="px-4 py-2 text-vscode-text/80 text-sm">
          <div
            className={`transition-opacity duration-200 ${
              !isExtended && "md:opacity-0"
            } py-3 px-2`}
          >
            PORTFOLIO
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 space-y-2 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onNavigate}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-vscode-sidebar-active text-vscode-accent"
                    : "hover:bg-vscode-sidebar-active"
                }`
              }
            >
              {item.icon}
              <span
                className={`transition-opacity duration-200 ${
                  !isExtended && "md:opacity-0 md:w-0"
                }`}
              >
                {item.fileName}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
