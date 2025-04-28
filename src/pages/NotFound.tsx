
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TypeWriter from '../components/TypeWriter';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-vscode-keyword">
          <TypeWriter text="404" />
        </h1>
        <div className="h-6"></div>
        <p className="text-xl text-vscode-text mb-8">
          <TypeWriter text="// Oops! File not found" delay={60} />
        </p>
        
        <div className="bg-vscode-sidebar border border-vscode-sidebar-active rounded-md p-6 max-w-lg mx-auto text-left">
          <pre className="text-sm">
            <span className="text-vscode-keyword">Error</span>: Cannot find module '{location.pathname}'<br />
            <span className="text-vscode-comment">// The specified path does not exist in this repository</span>
          </pre>
        </div>
        
        <button 
          onClick={() => navigate("/")}
          className="mt-8 px-4 py-2 bg-vscode-accent text-white rounded hover:bg-vscode-accent/80 transition-colors"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
