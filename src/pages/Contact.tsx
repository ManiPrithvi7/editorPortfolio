
import React, { useState } from 'react';
import TypeWriter from '../components/TypeWriter';
import { Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      console.log({formData})
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/',
      icon: <Github size={20} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manikandansiva20',
      icon: <Linkedin size={20} />,
    },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com',
    //   icon: <Twitter size={20} />,
    // },
  ];

  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-8">
        <TypeWriter text="Contact Me" />
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-medium mb-4 text-vscode-accent">Get in Touch</h2>
          <p className="text-vscode-text/80 mb-8">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
          
          <div className="bg-vscode-sidebar border border-vscode-sidebar-active rounded-md p-6 mb-8">
            <h3 className="text-lg font-medium mb-4">Find me on</h3>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-vscode-accent transition-colors"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-7 '>
          <div className="bg-vscode-sidebar border border-vscode-sidebar-active rounded-md p-6">
            <h3 className="text-lg font-medium mb-4">Email</h3>
            <a 
              href="mailto:dev.maniprithvi@gmail.com"
              className="text-vscode-accent hover:underline"
            >
              dev.maniprithvi@gmail.com
            </a>
          </div>

          <div className="bg-vscode-sidebar border border-vscode-sidebar-active rounded-md p-6">
            <h3 className="text-lg font-medium mb-4">Phone</h3>
            <a 
              // href="mailto:dev.maniprithvi@gmail.com"
              className="text-vscode-accent hover:underline"
            >
              +91 7667227263
            </a>
          </div>
        </div>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-4 text-vscode-accent">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-vscode-bg border border-vscode-sidebar-active rounded-md focus:outline-none focus:ring-1 focus:ring-vscode-accent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-vscode-bg border border-vscode-sidebar-active rounded-md focus:outline-none focus:ring-1 focus:ring-vscode-accent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-vscode-bg border border-vscode-sidebar-active rounded-md focus:outline-none focus:ring-1 focus:ring-vscode-accent"
              ></textarea>
            </div>
            
            {submitStatus.type && (
              <div className={`p-3 rounded-md ${
                submitStatus.type === 'success' 
                  ? 'bg-vscode-comment/30 text-vscode-comment' 
                  : 'bg-vscode-string/30 text-vscode-string'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-3 bg-vscode-accent text-white rounded-md hover:bg-vscode-accent/80 transition-colors disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
