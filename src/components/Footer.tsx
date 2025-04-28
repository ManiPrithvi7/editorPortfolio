
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-vscode-sidebar text-xs border-t border-vscode-sidebar-active py-3 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-vscode-accent">main*</span>
          <span>©{new Date().getFullYear()} Manikandan</span>
        </div>
        <div>{"<> by Manikandan </>"}</div>
      </div>
    </footer>
  );
};

export default Footer;
