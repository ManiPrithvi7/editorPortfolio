
import TypeWriter from '../components/TypeWriter';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "GraphQL", "Firebase","GCP","PM2"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Docker", "Jest", "CI/CD","Jira" ,"Swagger UI"]
    }
  ];

  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-8">
        <TypeWriter text="My Skills" />
      </h1>

      <div className="grid gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-vscode-sidebar border border-vscode-sidebar-active rounded-md overflow-hidden animate-fadeIn"
          >
            <div className="border-b border-vscode-sidebar-active px-4 py-2">
              <h3 className="font-medium text-vscode-accent">{category.title}</h3>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-vscode-sidebar-active rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-6 text-vscode-accent">Development Process</h2>
        
        <div className="bg-vscode-sidebar border border-vscode-sidebar-active rounded-md p-6">
          <div className="terminal-text">
            <p className="flex">
              <span className="text-vscode-keyword mr-2">$</span>
              <TypeWriter text="Planning & Research" delay={50} />
            </p>
            <p className="text-vscode-comment pl-6 mb-4">// Understanding requirements and planning architecture</p>
            
            <p className="flex">
              <span className="text-vscode-keyword mr-2">$</span>
              <TypeWriter text="Design & Prototyping" delay={60} />
            </p>
            <p className="text-vscode-comment pl-6 mb-4">// Creating wireframes and design mockups</p>
            
            <p className="flex">
              <span className="text-vscode-keyword mr-2">$</span>
              <TypeWriter text="Development" delay={70} />
            </p>
            <p className="text-vscode-comment pl-6 mb-4">// Writing clean, efficient, and maintainable code</p>
            
            <p className="flex">
              <span className="text-vscode-keyword mr-2">$</span>
              <TypeWriter text="Testing & Quality Assurance" delay={80} />
            </p>
            <p className="text-vscode-comment pl-6 mb-4">// Ensuring functionality and performance</p>
            
            <p className="flex">
              <span className="text-vscode-keyword mr-2">$</span>
              <TypeWriter text="Deployment & Maintenance" delay={90} />
            </p>
            <p className="text-vscode-comment pl-6 mb-4">// Deploying and providing ongoing support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
