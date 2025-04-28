
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  comment ?:string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techStack,
  liveUrl,
  githubUrl,
  comment
}) => {
  return (
    <div className="bg-vscode-sidebar border border-vscode-sidebar-active rounded-md overflow-hidden animate-fadeIn p-2">
      <div className="border-b border-vscode-sidebar-active px-4 py-2 flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>
        <div className="flex items-center space-x-2">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1 hover:bg-vscode-sidebar-active rounded transition-colors"
              aria-label="GitHub repository"
            >
              <Github size={16} />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1 hover:bg-vscode-sidebar-active rounded transition-colors"
              aria-label="Live site"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      
      {image && (
        <div className="border-b border-vscode-sidebar-active">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="p-4">
        <p className="text-sm text-vscode-text/90 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs bg-vscode-sidebar-active rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
