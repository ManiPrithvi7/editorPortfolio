
import React from 'react';
import TypeWriter from '../components/TypeWriter';
import CodeBlock from  "@/components/CodeBlock";
import DownloadResumeButton from '@/components/ResumeButton';

const Home = () => {
  const introCode = `// Welcome to my portfolio
  const dev = {
    name: 'Manikandan Siva',
    title: 'Full Stack MERN Developer',
    skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'],
    motto: 'Code, Create, Innovate',
    passion: 'Turning ideas into interactive, high-performance apps',
    contact: 'Let’s make the web a better place together!'
  };
  
  function intro() {
    return "
      Hey there! 👋 I’m Manikandan Siva, a passionate Full Stack MERN Developer.
      My toolkit? React, Next.js, Nodejs, Express.js MongoDB.
      My mission? Turning ideas into interactive, high-performance apps.
      Code, Create, Innovate is my mantra, and I’m always ready to collaborate.
      Reach out and let’s build something incredible! 🚀
    ";
  }
  
  // Ready to dive in? Let's start coding!
  console.log(intro());`;

  return (
    <section className="space-y-12 py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          <TypeWriter text="Hi, I'm Manikandan" />
        </h1>
        <h2 className="text-2xl text-vscode-accent">
          <TypeWriter 
            text="Full Stack MERN Developer" 
            delay={80} 
          />
        </h2>
        <p className="text-vscode-text/80 mt-6 max-w-xl leading-relaxed">
          I specialize in building modern web applications using the MERN stack.
          With a passion for clean code and user-centric design, I create efficient
          and scalable solutions that solve real-world problems.
        </p>
      </div>
      
      <CodeBlock
        code={introCode}
        fileName="introduction.js"
        className="max-w-2xl"
      />
      
      <div className="flex flex-wrap gap-4">
        <a
          href="/about"
          className="px-4 py-2 bg-vscode-accent text-white rounded hover:bg-vscode-accent/80 transition-colors"
        >
          Learn More About Me
        </a>
        {/* <a
          href="/projects"
          className="px-4 py-2 border border-vscode-sidebar-active rounded hover:bg-vscode-sidebar-active transition-colors"
        >
          View My Work
        </a> */}
        <a 
        className="px-4 py-2 border border-vscode-sidebar-active rounded hover:bg-vscode-sidebar-active transition-colors"
        href="public/manikandanResume-5.pdf" download>Get My Resume</a>

        {/* <DownloadResumeButton resumeUrl={'https://docs.google.com/document/d/1vA4vcyWUMb8nGLXsx93kGVWhhyEZnwscMPRGP6I5YQg/edit?usp=sharing'} /> */}

      </div>
    </section>
  );
};

export default Home;
