
import React from 'react';
import TypeWriter from '../components/TypeWriter';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Orrekie",
      description: "A comprehensive solution for managing users, projects, and clients. This platform offers seamless tools for team collaboration, project tracking, and client management, ensuring everything stays organized and on track.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      // githubUrl: "https://github.com",
      liveUrl: "https://www.orrekie.com/"
    },
    {
      title: "ROC",
      description: "A complete guide to Jersey, UK! Discover everything you need—from hotel, restaurant, bar, and pub availability to detailed information on local attractions, opening times, and transportation options. This app ensures you have all the tools to explore and enjoy Jersey effortlessly. ",
      techStack: ["Next.js", "Node.js","Typescript", "Express", "MongoDB","Gcp"],
      // githubUrl: "https://github.com",
      liveUrl: "https://roc.je"
    },
    {
      title: "Optimise Your Marketing",
      description: "An integrated platform for social creators to manage their presence across multiple platforms—YouTube, Instagram, TikTok, and more. The app also offers self-assigned assigned to help boost visibility, improve engagement, and drive growth across all social accounts.",
      techStack: ["Next.js", "TypeScript", "Prisma", "Node.js", "MongoDB","Gcp","Stripe"],
      // githubUrl: "https://github.com",
      liveUrl: "https://www.optimiseyourmarketing.co.uk/"
    },
    {
      title: "Maasta",
      description: "Our app allows event organizers to easily create, manage, and sell events. With a personalized dashboard and profile page, they can showcase their services and past events, all while gaining control over event listings and sales.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB"],
      // githubUrl: "https://github.com",
      liveUrl: "https://www.maasta.in/"
    },
    {
      title: "Leglexi",
      description:`A seamless platform for clients to search, connect, and book appointments with trusted lawyers. Lawyers can manage cases, track progress, and provide updates, streamlining legal services for both parties.`,
      techStack: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      // githubUrl: "https://github.com",
      liveUrl: "https://www.legalexllc.com/"
    },

  ];

  return (
    <section className="py-12 px-3">
      <h1 className="text-3xl font-bold mb-8">
        <TypeWriter text="My Projects" />
      </h1>
      
      <p className="text-vscode-text/80 mb-8 max-w-2xl">
        Here are some of the projects I've worked on. Each project represents different 
        challenges and solutions in web development.
      </p>
      
      <div className="   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            // githubUrl={project?.githubUrl|| ""}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-vscode-sidebar border border-vscode-sidebar-active rounded-md">
        <h2 className="text-xl font-semibold mb-4">Want to see more?</h2>
        <p className="mb-4">
          These are just a few examples of my work. Visit my GitHub profile for more projects and contributions.
        </p>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-vscode-accent text-white rounded hover:bg-vscode-accent/80 transition-colors"
        >
          View GitHub Profile
        </a>
      </div>
    </section>
  );
};

export default Projects;
