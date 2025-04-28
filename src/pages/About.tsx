
import React from 'react';
import TypeWriter from '../components/TypeWriter';
import CodeBlock from '../components/CodeBlock';

const About = () => {
  const aboutCode = `/**
 * About Manikandan
 * ---------------
 * A passionate Full Stack Developer with expertise in
 * building modern web applications using MERN stack
 */

class Developer {
  constructor() {
    this.name = 'Manikandan';
    this.role = 'Full Stack MERN Developer';
    this.location = 'India';
    this.languages = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python'];
    this.interests = [
      'Web Development',
      'Open Source',
      'UI/UX Design',
      'Problem Solving'
    ];
  }

  getEducation() {
    return [
      {
        degree: 'Bsc',
        institution: 'Dr.N.G.P ars and science college',
        year: '2018'
      }
    ];
  }

  getExperience() {
    return [
      {
        role: 'MERN Developer',
        company: 'Foss Freaks',
        period: 'june 2023- Present',
        responsibilities: [
          'Developed and maintained web applications using MERN stack',
          'Collaborated with cross-functional teams',
          'Improved application performance by 40%'
        ]
      },
      {
        role: 'Front-end Developer Trainee',
        company: 'Senchola technologies solution',
        period: '2023 Feb - May',
        responsibilities: [
              'assisted to create a scalable applications',
              'created a reusable components',
              'assisted senior developer to complete thier project workflows'
        ]
      }
    ];
  }
}

// Feel free to connect!
const maniKandan = new Developer();`;

  return (
    <section className="space-y-10 py-12">
      <div>
        <h1 className="text-3xl font-bold mb-6">
          <TypeWriter text="About Me" />
        </h1>
        
        <div className="space-y-6 max-w-2xl text-vscode-text/90">
          <p>
            Hello! I'm Manikandan, a passionate Full Stack MERN Developer
            with a strong focus on creating responsive and user-friendly web applications.
            I enjoy tackling complex problems and turning them into simple and elegant solutions.
          </p>
          
          <p>
            My journey in web development started with a curiosity about how websites work.
            This curiosity evolved into a passion for building digital experiences that are
            not only functional but also intuitive and accessible.
          </p>
          
          <p>
            When I'm not coding, you can find me exploring new technologies  and  enhancing my skills through continuous learning.
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <CodeBlock
          code={aboutCode}
          fileName="about.js"
        />
      </div>
      
      {/* <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-vscode-accent">Education & Experience</h2>
        
        <div className="space-y-6">
          <div className="bg-vscode-sidebar p-6 rounded-md border border-vscode-sidebar-active">
            <h3 className="text-lg font-medium mb-2">Education</h3>
            <div className="pl-4 border-l-2 border-vscode-accent">
              <p className="text-vscode-function">B.Sc Catering Science and Hotel Management</p>
              <p className="text-vscode-text/70">Dr.N.G.P Arts and Science College</p>
              <p className="text-vscode-text/70">Coimbatore</p>
            </div>
          </div>
          
          <div className="bg-vscode-sidebar p-6 rounded-md border border-vscode-sidebar-active">
            <h3 className="text-lg font-medium mb-2">Work Experience</h3>
            <div className="pl-4 border-l-2 border-vscode-accent">
              <p className="text-vscode-function">MERN Stack Developer</p>
              <p className="text-vscode-text/70">Foss Freaks, 2023 - Present</p>
              <ul className="list-disc list-inside mt-2 text-sm space-y-1 text-vscode-text/80">
                <li>Developed and maintained web applications using MERN stack</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Improved application performance by 40%</li>
              </ul>
            </div>
            <br />
            <div className="pl-4 border-l-2 border-vscode-accent">
              <p className="text-vscode-function">MERN Stack Developer</p>
              <p className="text-vscode-text/70">Foss Freaks, 2023 - Present</p>
              <ul className="list-disc list-inside mt-2 text-sm space-y-1 text-vscode-text/80">
                <li>Developed and maintained web applications using MERN stack</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Improved application performance by 40%</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;
